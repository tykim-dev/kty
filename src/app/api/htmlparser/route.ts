'use strict'
import User from "@/app/models/userModel";
import { Word1, Word2, Word3, Word4, Word5 } from "@/app/models/word1Model";
import Word from "@/app/models/wordModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"


// 1: 3246, 2: 2648, 3: 1546, 4: 1037, 5: 744
const DATA_USERS_URL = `https://ja.dict.naver.com/api/jako/getJLPTList?level=4&part=%EC%A0%84%EC%B2%B4&page=1`

export async function GET(request: NextRequest) {

  // const res = await fetch(DATA_USERS_URL);
  // const data = await res.json();

  // // const { m_total, m_page, m_pageSize, m_start, m_end, m_totalPage, m_items } = data;
  // const { m_total, m_totalPage } = data;

  await connectDB();
  
  // for (let index = 0; index < m_totalPage; index++) {
  //   let url = `https://ja.dict.naver.com/api/jako/getJLPTList?level=4&part=%EC%A0%84%EC%B2%B4&page=${index + 1}`;
    
  //   let resData = await fetch(url);
  //   let resJson = await resData.json();
  //   const { m_items } = resJson;

  //   for (let idx = 0; idx < m_items.length; idx++) {
  //   // await m_items.forEach( async (wordInfo: WordInfo) => {
  //     const { category1, level, pron, show_entry, means, parts } = m_items[idx];

  //     const newWord = new Word4({
  //       type: category1 || '',
  //       level: level || '',
  //       word: pron || '',
  //       read: show_entry || '',
  //       means: means || [],
  //       parts: parts || [],
  //     })

  //     await newWord.save();

  //   // });
  //   }
  // }

  // return NextResponse.json({m_total})

  // let word = await Word1.find();

  // for (let index = 0; index < word.length; index++) {
    
  //   await new Word({
  //           type: word[index].type,
  //           level: word[index].level,
  //           word: word[index].word,
  //           read: word[index].read,
  //           means: word[index].means,
  //           parts: word[index].parts,
  //         }).save();
  // }

  // word = await Word2.find();

  // for (let index = 0; index < word.length; index++) {
    
  //   await new Word({
  //           type: word[index].type,
  //           level: word[index].level,
  //           word: word[index].word,
  //           read: word[index].read,
  //           means: word[index].means,
  //           parts: word[index].parts,
  //         }).save();
  // }

  // word = await Word3.find();

  // for (let index = 0; index < word.length; index++) {
    
  //   await new Word({
  //           type: word[index].type,
  //           level: word[index].level,
  //           word: word[index].word,
  //           read: word[index].read,
  //           means: word[index].means,
  //           parts: word[index].parts,
  //         }).save();
  // }

  // word = await Word4.find();

  // for (let index = 0; index < word.length; index++) {
    
  //   await new Word({
  //           type: word[index].type,
  //           level: word[index].level,
  //           word: word[index].word,
  //           read: word[index].read,
  //           means: word[index].means,
  //           parts: word[index].parts,
  //         }).save();
  // }

  // word = await Word5.find();

  // for (let index = 0; index < word.length; index++) {
    
  //   await new Word({
  //           type: word[index].type,
  //           level: word[index].level,
  //           word: word[index].word,
  //           read: word[index].read,
  //           means: word[index].means,
  //           parts: word[index].parts,
  //         }).save();
  // }

  return NextResponse.json({word1: 0})
}
