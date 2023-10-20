import User from "@/app/models/userModel";
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
  
  let conditions:any = {type, level};

  if(part) {
    conditions = {...conditions, parts: [part] };
  }

  const wordList = await Word.find(conditions)
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  // const userList = await User.find().select('-password');

  return NextResponse.json(wordList)
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

export async function DELETE(request: NextRequest) {
  // await connectDB();

  // const { id }: Partial<User> = await request.json();

  // const res = await fetch(`${DATA_USERS_URL}/${id}`, {
  //   method: 'DELETE',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': API_KEY,
  //   }
  // });

  // return NextResponse.json({ "message": `${id}가 삭제 되었습니다.`})
}