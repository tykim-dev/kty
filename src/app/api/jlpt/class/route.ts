import Jlpt from "@/app/models/jlptModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  await connectDB();
  
  const searchParams = request.nextUrl.searchParams;
  
  const jlptClassList = await Jlpt.aggregate([
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

  // const jlptClassList = await Jlpt.find()
  //   .distinct('classification')  
    // .select('year month level classification')
    // .sort('level -year -month');

  // const userList = await User.find().select('-password');

  return NextResponse.json(jlptClassList)
}