'use strict'
import User from "@/app/models/userModel";
import { Word1, Word2, Word3, Word4, Word5 } from "@/app/models/word1Model";
import Word from "@/app/models/wordModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"
import { parse } from 'node-html-parser';
import { HTMLToJSON } from 'html-to-json-parser'; 
import { isQuestionOrExclamationToken } from "typescript";
import Vocabulary from "@/app/models/vocabularyModel";
import Answers from "@/app/models/answersModel";

// 1: 3246, 2: 2648, 3: 1546, 4: 1037, 5: 744
const DATA_USERS_URL = `https://dethitiengnhat.com/en/jlpt/N1`

export function parseContent(content: any) {
  if(!content) return '';

  let qList = content.map((qItem: any) => {
    let result = '';

    if(typeof qItem === 'object') {
      if(qItem?.type === 'u') {
        result = '<u>' + qItem?.content.toString() + '</u>';
      } else if(qItem?.type === 'br') {
        result = '<br>';
      } else {
        result = qItem?.content;
      }
    } else if(typeof qItem === 'string') {
      result = qItem;
    }

    return result;
  });

  return (qList || []).join('').trim();
}

export async function GET(request: NextRequest) {

  // const res = await fetch(DATA_USERS_URL);
  // const data = await res.json();

  // // const { m_total, m_page, m_pageSize, m_start, m_end, m_totalPage, m_items } = data;
  // const { m_total, m_totalPage } = data;

  // await connectDB();
  const LEVEL = 'N1';

  for (let index = 2023; index <= 2023; index++) {
    for (let order = 0; order < 2; order++) {
      let month = index === 0 ? '07' : '12';

      let url = `https://dethitiengnhat.com/en/jlpt/${LEVEL}/${index}${month}/1`;
      let resData = await fetch(url);
      let resHtml = await resData.text();

      const root = parse(resHtml);
      const fHtml = root.querySelector('.dttn')?.toString() || '';

      // Conversion
      const result = await HTMLToJSON(fHtml.replaceAll('\t', ''), true);
      const cHtml = JSON.parse(result.toString());
      
      cHtml.content.map(async(item: any, contentNo: number) => {
        let vocaInfo = {};

        // 그룹문제
        if(item.attributes?.class === 'big_item') {
          console.log(parseContent(item.content));
          vocaInfo = {
            ...vocaInfo, 
            question: parseContent(item.content),
            questionType: 'group'
          };
        }

        // 문제
        if(item.attributes?.class === 'question_list') {
          console.log(parseContent(item.content));
          vocaInfo = {
            ...vocaInfo, 
            question: parseContent(item.content),
            questionType: 'group'
          };
        }

        // 본문
        if(item.attributes?.class === 'question_content') {
          console.log(parseContent(item.content));
          vocaInfo = {
            ...vocaInfo, 
            question: parseContent(item.content),
            questionType: 'normal'
          };
        }

        // 보기
        if(item.attributes?.class === 'answer_2row') {
          let ansArr = new Array();

          item.content.forEach((ansContent: any) => {
            let result = [];

            if(typeof ansContent === 'object') {
              result = ansContent.content.map((ans: any) => {
                if(ans.attributes?.class === 'answers') {
                  return parseContent(ans?.content).trim();
                } else {
                  return '';
                }
              });
            } else {
              if(typeof ansContent === 'string') {
                if(ansContent === '\r\n') {
                  return '';
                }
              }
            }

            console.log(result.join('').trim());
            ansArr = [...ansArr, result.join('').trim()]
          });

          vocaInfo = {
            ...vocaInfo, 
            choices: ansArr,
          };

          vocaInfo = {
            ...vocaInfo, 
            year: index,
            order: order+1,
            level: LEVEL,
            no: contentNo,
          };
        }

        // // 문제 저장
        // const newVoca = new Vocabulary(vocaInfo);
        // await newVoca.save();

        console.log(vocaInfo);

        // 정답
        if((item.attributes?.id || '').includes('AS')) {
          console.log(parseContent(item?.content));

          const newAnswer = new Answers({
            year: index,
            order: order+1,
            level: LEVEL,
            classification: 'vocabulary',
            questionNo: contentNo,
            answer: parseContent(item?.content),
          });

          await newAnswer.save();
        }
      });
    
    }
  }

  return NextResponse.json({word1: 0})
}
