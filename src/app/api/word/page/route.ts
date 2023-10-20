import Word from "@/app/models/wordModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  await connectDB();

  const searchParams = request.nextUrl.searchParams;
  
  const type = searchParams.get('type');
  const level = searchParams.get('level');
  const part = searchParams.get('part');
  const limit = Number(searchParams.get('limit')) || 20;
  const page = Number(searchParams.get('page') || 1);
  
  let pageInfo: Paginate = {
    total: 0, 
    totalPage: 1, 
    currentPage: 1, 
    startPage: 1, 
    pageSize: 1,
  };

  let conditions:any = {type, level};

  if(part) {
    conditions = {...conditions, parts: [part] };
  }

  const wordCount = await Word.count(conditions);

  if(wordCount > 0) {
    pageInfo.total = wordCount;
    pageInfo.totalPage = Math.ceil(wordCount / limit);
    pageInfo.currentPage = page;

    

    pageInfo.pageSize = 10;
  }

  return NextResponse.json(pageInfo)
}

export async function POST(request: NextRequest) {
  await connectDB();
  
  const {type, level, part, limit = 20, page = 1} = await request.json();
  const limit1 = limit;
  const page1 = page;
  
  const wordList = await Word.find({ type, level, parts: part ? [part] : [] })
    .limit(limit1 * 1)
    .skip((page1 - 1) * limit1)
    .exec();

  // const userList = await User.find().select('-password');

  return NextResponse.json(wordList)
}
