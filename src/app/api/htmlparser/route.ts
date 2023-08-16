import User from "@/app/models/userModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"
import { parse } from 'node-html-parser';

const DATA_USERS_URL = 'https://ja.dict.naver.com/#/jlpt/list?level=1&part=allClass&page=1'

export async function GET(request: NextRequest) {
  const res = await fetch(DATA_USERS_URL);
  const data = await res;
  return NextResponse.json(data)
}
