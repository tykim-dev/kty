import LevelUp from "@/app/models/levelUpModel";
import WordToday from "@/app/models/wordTodayModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  await connectDB();
  
  const searchParams = request.nextUrl.searchParams;
  
  const levelList = await WordToday.aggregate([
    { '$group' : 
        {
            '_id' : '$level', 
            'levels': {'$addToSet' : '$level'},
            // 'classificationArr' : {'$addToSet' : '$classification'}, 
            // 'yearArr' : {'$addToSet' : '$year'}, 
            // 'monthArr' : {'$addToSet' : '$month'}, 
        }
    },
  ])

  return NextResponse.json(levelList)
}