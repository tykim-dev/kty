import User from "@/app/models/userModel";
import Word from "@/app/models/wordModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

const DATA_USERS_URL = 'https://ja.dict.naver.com/api/jako/getJLPTList?level=1&part=%EC%A0%84%EC%B2%B4&page=1'

export async function GET(request: NextRequest) {

  const res = await fetch(DATA_USERS_URL);
  const data = await res.json();

  const { m_total, m_page, m_pageSize, m_start, m_end, m_totalPage, m_items } = data;

  await connectDB();

  for (let index = 0; index < m_totalPage; index++) {
    let url = 'https://ja.dict.naver.com/api/jako/getJLPTList?level=1&part=%EC%A0%84%EC%B2%B4&page=' + (index + 1);

    let resData = await fetch(url);
    let resJson = await resData.json();
 
    const wordList: [] = resJson?.m_items || [];

    await wordList.forEach( async (wordInfo: any) => {
      const newWord = new Word({
        type: wordInfo?.category1,
        level: wordInfo?.level,
        word: wordInfo?.pron || '',
        read: wordInfo?.entry || '',
        means: wordInfo?.means || [],
        parts: wordInfo?.parts || [],
      })

      await newWord.save();
    });
  }

  return NextResponse.json({m_total})
}
