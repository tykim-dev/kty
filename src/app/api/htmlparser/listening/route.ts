'use strict'
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"
import { parse } from 'node-html-parser';
import { HTMLToJSON } from 'html-to-json-parser'; 
import Vocabulary from "@/app/models/vocabularyModel";
import Answers from "@/app/models/answersModel";
import { isEmpty } from "lodash";

const CLASSIFICATION = 'listening';

export function parseContent(content: any) {
  if(!content) return '';

  let qList = content.map((qItem: any) => {
    let result = '';

    if(typeof qItem === 'object') {
      if(qItem?.type === 'u') {
        result = '<u>' + (qItem?.content || '').toString().trim() + '</u>';
      } else if(qItem?.type === 'br') {
        result = '<br>';
      } else {
        result = (qItem?.content || '').toString().trim();
      }
    } else if(typeof qItem === 'string') {
      result = (qItem || '').toString().trim();
    }

    return result;
  });

  return (qList || []).join('').trim();
}

export async function GET(request: NextRequest) {

  await connectDB();

  const LEVEL = 'N1';
  let resultCnt = 0;
  let invalidSaves = Array();

  for (let index = 2010; index <= 2010; index++) {
    for (let order = 0; order < 2; order++) {
      let sortNo = 1;
      let questionNo = 1;

      let month = order === 0 ? '07' : '12';

      let url = `https://dethitiengnhat.com/en/jlpt/${LEVEL}/${index}${month}/4`;
      let resData = await fetch(url);
      let resHtml = await resData.text();


      const root = parse(resHtml);
      const fHtml = root.querySelector('.dttn')?.toString() || '';

      // Conversion
      let result = null;
      
      if(fHtml) {
        result = await HTMLToJSON(fHtml.replaceAll('\t', ''), true);
      } else {
        invalidSaves.push({year: index, month: month});
        continue;
      }

      const cHtml = JSON.parse(result.toString());
      let newQuestion = new Vocabulary();

      let isChoice = false;

      for(let itemIdx = 0; itemIdx < cHtml.content.length; itemIdx++) {
        let item = cHtml.content[itemIdx];
        
        // 그룹문제
        if(item.attributes?.class === 'big_item') {
          newQuestion.question = { content: parseContent(item.content) };
          console.log(item);
          if(!newQuestion.question) {
            newQuestion = new Vocabulary();
            continue;
          }

          newQuestion.questionType = 'group';
          newQuestion.sortNo = sortNo++;
        }

        // 본문
        if(item.attributes?.class === 'question_content') {
          newQuestion.question = { content: parseContent(item.content) };

          if(!newQuestion.question) {
            newQuestion = new Vocabulary();
            continue;
          }
          
          newQuestion.questionType = 'content';
          newQuestion.sortNo = sortNo++;
        }

        // 문제
        if(item.attributes?.class === 'question_list') {
          newQuestion.question = { content: parseContent(item.content) };

          if(!newQuestion.question) {
            newQuestion = new Vocabulary();
            continue;
          }

          newQuestion.questionType = 'normal';
          newQuestion.sortNo = sortNo++;
          newQuestion.questionNo = questionNo;
        }

        // 보기
        if(item.attributes?.class?.includes('answer_')) {
          let ansArr = new Array();
          let choiceIdx = 0;

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

            ansArr = [...ansArr, { no: ++choiceIdx, content: result.join('').trim()}];

            isChoice = true;
          });

          newQuestion.choices = ansArr;
        }

        // 정답
        if((item.attributes?.id || '').includes('AS')) {
          const newAnswer = new Answers({
            year: index,
            month: month,
            level: LEVEL,
            classification: CLASSIFICATION,
            questionNo: questionNo,
            answer: parseContent(item?.content),
          });

          // console.log(newAnswer);
          await newAnswer.save();

          questionNo++;
          resultCnt++;
        }

        newQuestion.year = index;
        newQuestion.month = month;
        newQuestion.level = LEVEL;
        newQuestion.classification = CLASSIFICATION;
        
        if('group' === newQuestion?.questionType) {
          await newQuestion.save();

          // console.log(newQuestion);

          newQuestion = new Vocabulary();
        } else if('content' === newQuestion?.questionType) {
          await newQuestion.save();

          // console.log(newQuestion);

          newQuestion = new Vocabulary();
        } else if('normal' === newQuestion?.questionType) {
          if(isChoice) {
            await newQuestion.save();

            // console.log(newQuestion);

            newQuestion = new Vocabulary();
            isChoice = false;
          }
        }
      };
    }
  }

  return NextResponse.json({resultCnt: resultCnt, invalidSaves: invalidSaves})
}
