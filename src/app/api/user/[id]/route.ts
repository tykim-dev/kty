import User from "@/app/models/userModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

connectDB()

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  
  const user = await User.findOne({_id: params.id});

  return NextResponse.json(user)
}