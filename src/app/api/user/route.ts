import User from "@/app/models/userModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

const DATA_USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const API_KEY: string = process.env.DATA_API_KEY as string

connectDB()

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const userList = await User.find();

  return NextResponse.json(userList)
}

export async function POST(request: NextRequest) {
  // const data = await request.json();

  const res = await fetch(DATA_USERS_URL);
  const users: User[] = await res.json();

  return NextResponse.json(users)
}

export async function DELETE(request: NextRequest) {
  const { id }: Partial<User> = await request.json();

  const res = await fetch(`${DATA_USERS_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY,
    }
  });

  return NextResponse.json({ "message": `${id}가 삭제 되었습니다.`})
}