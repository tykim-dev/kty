import User from "@/app/models/userModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"
import { parse } from 'node-html-parser';

const DATA_USERS_URL = 'https://ja.dict.naver.com/#/jlpt/list?level=1&part=allClass&page=1'

export async function GET(request: NextRequest) {

  const res = await fetch(DATA_USERS_URL);

  console.log(res);


  // const word = fetch(DATA_USERS_URL)
  //   .then((result) => {
  //     return result.text();
  //   })  
  //   .then((content) => {
  //     console.log(content);
  //     let html = parse(content as string);
  //     console.log(html);
  // });
  
  // console.log(res);

  return NextResponse.json({})
}
