import Word from "@/app/models/wordModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  await connectDB();

  const searchParams = request.nextUrl.searchParams;
  
  const type = searchParams.get('type');
  const level = searchParams.get('level');
  const limit = Number(searchParams.get('limit')) || 20;
  const page = Number(searchParams.get('page') || 1);
  
  const wordCount = await Word.count({ type, level }).exec();

  return NextResponse.json({ 
    total: wordCount, 
    totalPage: Math.ceil(wordCount / limit) ,
    currentPage: page,
  })
}

export async function POST(request: NextRequest) {
  await connectDB();
  
  const {type, level, limit = 20, page = 1} = await request.json();
  const limit1 = limit;
  const page1 = page;
  
  const wordList = await Word.find({ type, level })
    .limit(limit1 * 1)
    .skip((page1 - 1) * limit1)
    .exec();

  // const userList = await User.find().select('-password');

  return NextResponse.json(wordList)
}
