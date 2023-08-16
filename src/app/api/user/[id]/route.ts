import User from "@/app/models/userModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  await connectDB()
  // .select('-password') 비밀번호는 빼고 조회
  const user = await User.findOne({_id: params.id}).select('-password');

  return NextResponse.json(user)
}