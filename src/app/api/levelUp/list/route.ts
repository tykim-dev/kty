import LevelUp from "@/app/models/levelUpModel";
import connectDB from "@/app/utils/database";
import { values } from "lodash";
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
  const {level, classification} = levelUpConditions.params || {}
  
  let levelUpList: any[] = [];
  let classNm = 'kangi';  // 과목

  // 조회 문제 수
  let questionSize:any = {
    N1: {
      kangi: 3,
      vocabulary1: 3,
      vocabulary2: 2,
      vocabulary3: 2,
    },
    N2: {
      kangi: 3,
      vocabulary1: 3,
      vocabulary2: 2,
      vocabulary3: 2,
    },
    N3: {
      kangi: 4,
      vocabulary1: 3,
      vocabulary2: 2,
      vocabulary3: 1,
    },
    N4: {
      kangi: 5,
      vocabulary1: 3,
      vocabulary2: 2,
    },
    N5: {
      kangi: 5,
      vocabulary1: 3,
      vocabulary2: 2,
    }
  }

  let resultData: any[] = [];

  // 문자/어휘
  if('vocabulary' === classification) {
      classNm = 'kangi';

      // 1. kangi GROUP 문제 조회
      resultData = await LevelUp.find({level, classification: classNm, questionType: 'group', questionGroupNo: {$exists: false}}).exec();
      levelUpList = [...levelUpList, ...resultData];

      // 2. kangi 문제번호 랜덤 조회
      let questionGroupNoList = await LevelUp.aggregate([
        { $match: {level, classification: classNm, questionGroupNo: {$exists: true}} },
        {
          $group : {
            _id : '$questionGroupNo',
          }
        },
        { $sample: { size : questionSize[level][classNm] } }
      ]);

      // 3. kangi 문제 랜덤 조회
      resultData = await LevelUp.aggregate([
        { $match: {level, classification: classNm, questionGroupNo: { $in: await questionGroupNoList.map((item) => item._id)} } },
      ]);
      levelUpList = [...levelUpList, ...resultData];

      classNm = 'vocabulary1';

      // 1. vocabulary1 GROUP 문제 조회
      resultData = await LevelUp.find({level, classification: classNm, questionType: 'group'}).exec();
      levelUpList = [...levelUpList, ...resultData];
      // 2. vocabulary1 문제 랜덤 조회
      resultData = await LevelUp.aggregate([
        { $match: {level, classification: classNm, 'questionType': {'$ne': 'group'}} },
        { $sample: { size : questionSize[level][classNm] } }
      ]);
      levelUpList = [...levelUpList, ...resultData];

      classNm = 'vocabulary2';
      
      // 1. vocabulary1 GROUP 문제 조회
      resultData = await LevelUp.find({level, classification: classNm, questionType: 'group'}).exec();
      levelUpList = [...levelUpList, ...resultData];
      // 2. vocabulary1 문제 랜덤 조회
      resultData = await LevelUp.aggregate([ 
        { $match: {level, classification: classNm, 'questionType': {'$ne': 'group'}} },
        { $sample: { size : questionSize[level][classNm] } }
      ]);
      levelUpList = [...levelUpList, ...resultData];
      
      if(['N1', 'N2', 'N3'].includes(level)) {
        classNm = 'vocabulary3';

        // 1. vocabulary1 GROUP 문제 조회
        resultData = await LevelUp.find({level, classification: classNm, questionType: 'group'}).exec();
        levelUpList = [...levelUpList, ...resultData];
        // 2. vocabulary1 문제 랜덤 조회
        resultData = await LevelUp.aggregate([ 
          { $match: {level, classification: classNm, 'questionType': {'$ne': 'group'}} },
          { $sample: { size : questionSize[level][classNm] } }
        ]);
        levelUpList = [...levelUpList, ...resultData];
      }
  } else if('grammar' === classification) {
    questionSize = 10;

    // 1. GROUP 문제 조회
    resultData = await LevelUp.find({level, classification, questionType: 'group'}).exec();
    levelUpList = [...levelUpList, ...resultData];

    // 2. 문제 랜덤 조회
    resultData = await LevelUp.aggregate([ { $match: {level, classification, 'questionType': {'$ne': 'group'}} } , { $sample: { size : questionSize } } ]);
    levelUpList = [...levelUpList, ...resultData];
  } else if('listening' === classification) {
    questionSize = 5;

    // 1. GROUP 문제 조회
    resultData = await LevelUp.find({level, classification, questionType: 'group'}).exec();
    levelUpList = [...levelUpList, ...resultData];

    // 2. 문제 랜덤 조회
    resultData = await LevelUp.aggregate([ { $match: {level, classification, 'questionType': {'$ne': 'group'}} } , { $sample: { size : questionSize } } ]);
    levelUpList = [...levelUpList, ...resultData];
  }

  let questionNo = 0;

  levelUpList.forEach((item, idx) => {
    item.sortNo = idx;

    if(item.questionType === 'normal') {
      questionNo++;
      item.questionNo = questionNo;
    }
  })

  return NextResponse.json(levelUpList)
}