import LevelUp from "@/app/models/levelUpModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

// export async function GET(request: NextRequest) {
//   await connectDB();

//   const searchParams = request.nextUrl.searchParams;
  
//   const classification = searchParams.get('classification');
//   const level = searchParams.get('level');
//   const year = searchParams.get('year');
//   const month = searchParams.get('month');
  
//   let conditions:any = {classification, level, year, month};
// console.log(conditions);
//   const jlptList = await Jlpt.find(conditions);

//   // const userList = await User.find().select('-password');

//   return NextResponse.json(jlptList)
// }

export async function POST(request: NextRequest) {
  await connectDB();
  
  const levelUpConditions = await request.json();
  const levelUpList = await LevelUp.find(levelUpConditions.params).exec();

  // const userList = await User.find().select('-password');

  return NextResponse.json(levelUpList)
}