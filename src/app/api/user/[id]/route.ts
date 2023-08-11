import User from "@/app/models/userModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

connectDB()

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  // .select('-email') 이메일은 빼고 조회
  const user = await User.findOne({_id: params.id}).select('-email');

  return NextResponse.json(user)
}