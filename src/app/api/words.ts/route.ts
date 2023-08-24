import User from "@/app/models/userModel";
import Word from "@/app/models/wordModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  // await connectDB();
console.log(request);
//   const { searchParams } = new URL(request.url);
// console.log(searchParams);
  // const wordList = Word.find();

  // const userList = await User.find().select('-password');

  return NextResponse.json({})
}

export async function POST(request: NextRequest) {
  // await connectDB();

  // const res = await fetch(DATA_USERS_URL);
  // const users: User[] = await res.json();

  // return NextResponse.json(users)
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