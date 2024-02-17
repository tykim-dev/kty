import LevelUp from "@/app/models/levelUpModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  await connectDB();
  
  const searchParams = request.nextUrl.searchParams;
  
  const levelUpClassList = await LevelUp.aggregate([
    { '$group' : 
        {
            '_id' : 'class', 
            'levelArr': {'$addToSet' : '$level'}, 
            'classificationArr' : {'$addToSet' : '$classification'}, 
            'yearArr' : {'$addToSet' : '$year'}, 
            'monthArr' : {'$addToSet' : '$month'}, 
        }
    },
  ])

  return NextResponse.json(levelUpClassList)
}