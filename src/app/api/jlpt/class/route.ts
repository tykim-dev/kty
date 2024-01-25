import Jlpt from "@/app/models/jlptModel";
import connectDB from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  await connectDB();
  
  const searchParams = request.nextUrl.searchParams;
  
  const level = searchParams.get('level');
  
  let conditions:any = {};

  const jlptClassList = await Jlpt.aggregate([
    { $match : { level : level} },
    { $group : 
        {
            '_id' : '$classification', 
            'startYear' : {'$min' : '$year'},
            'endYear' : {'$max' : '$year'},
            'startMonth' : {'$min' : '$month'},
            'endMonth' : {'$max' : '$month'},
            'level' : {'$max' : '$level'}
        },
        // $match : { level : 'N1'}
    }
])

  // const jlptClassList = await Jlpt.find()
  //   .distinct('classification')  
    // .select('year month level classification')
    // .sort('level -year -month');

  // const userList = await User.find().select('-password');

  return NextResponse.json(jlptClassList)
}

export async function POST(request: NextRequest) {
  await connectDB();
  
  const {level} = await request.json();
  
  const jlptClassList = await Jlpt.find()
    .distinct('year month level classification')  
    // .select('year month level classification')
    // .sort('level -year -month');

  // const userList = await User.find().select('-password');

  return NextResponse.json(jlptClassList)
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