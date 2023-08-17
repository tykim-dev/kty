import User from "@/app/models/userModel";
import Word from "@/app/models/word";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"
import { parse } from 'node-html-parser';

const DATA_USERS_URL = 'https://ja.dict.naver.com/api/jako/getJLPTList?level=1&part=%EC%A0%84%EC%B2%B4&page=1'

export async function GET(request: NextRequest) {

  const res = await fetch(DATA_USERS_URL);
  const data = await res.json();

  const { m_total, m_page, m_pageSize, m_start, m_end, m_totalPage, m_items } = data;


  Array.from(Array(m_totalPage), (e, pageNo) => {
    let url = ''


    // const newUser = new Word({
    //   type: ''
    //   : user?.name ,
    //   email: user?.email,
    //   image: user?.image,
    //   provider: account.provider,
    // })
  });

  return NextResponse.json({m_total})
}
