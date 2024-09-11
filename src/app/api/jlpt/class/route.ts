import Jlpt from "@/app/models/jlptModel";
import connectDB from "@/app/utils/database";
import { sortBy } from "lodash";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  await connectDB();
  
  const searchParams = request.nextUrl.searchParams;
  
  const jlptClassInfo1 = await Jlpt.aggregate([
    { $match : { level: {$in : ['N1', 'N2', 'N3'] } }},
    { 
      '$group' : {
        _id: {
          level: "$level",
          classification: "$classification",
        },
        'years' : {'$addToSet' : '$year'},
        'months' : {'$addToSet' : '$month'}
      }
    },
    { 
      '$group' : {
        _id: {
          level: "$_id.level",
        },
        classifications : { 
          $push: { 
            classification: '$_id.classification', 
            years: {
              $sortArray: { input: "$years", sortBy: -1 }
            },
            months: {
              $sortArray: { input: "$months", sortBy: -1 }
            },
            classificationNm: {
              $switch: {
                branches: [
                  { case: { $eq: ['$_id.classification', 'vocabulary'] }, then: '[ 문자어휘 / 文字語彙 / Vocabulary ]' },
                  { case: { $eq: ['$_id.classification', 'grammar'] }, then: '[ 문법 / 文法 / Grammar ]' },
                  { case: { $eq: ['$_id.classification', 'reading'] }, then: '[ 독해 / 読解 / Reading ]' },
                  { case: { $eq: ['$_id.classification', 'listening'] }, then: '[ 청해 / 聴解 / Listening ]' },
                ],
                default: ''
              }
            },
            sortNo: {
              $switch: {
                branches: [
                  { case: { $eq: ['$_id.classification', 'vocabulary'] }, then: '0' },
                  { case: { $eq: ['$_id.classification', 'grammar'] }, then: '1' },
                  { case: { $eq: ['$_id.classification', 'reading'] }, then: '2' },
                  { case: { $eq: ['$_id.classification', 'listening'] }, then: '3' },
                ],
                default: 4
              }
            }
          } 
        }
      }
    },
    {
      $project: {
        _id: 0,
        level: '$_id.level',
        classifications: {
          $sortArray: { input: "$classifications", sortBy: { sortNo: 1 } }
        }
      }
    },
    { $sort: { level: 1 } },
  ]);

  const jlptClassInfo2 = await Jlpt.aggregate([
    { $match : { level: {$in : ['N4', 'N5'] } }},
    { 
      '$group' : {
        _id: {
          level: "$level",
          classification: "$classification",
        },
        'years' : {'$addToSet' : '$year'},
        'months' : {'$addToSet' : '$month'}
      }
    },
    { 
      '$group' : {
        _id: {
          level: "$_id.level",
        },
        classifications : { 
          $push: { 
            classification: '$_id.classification', 
            years: {
              $sortArray: { input: "$years", sortBy: 1 }
            },
            months: {
              $sortArray: { input: "$months", sortBy: 1 }
            },
            classificationNm: {
              $switch: {
                branches: [
                  { case: { $eq: ['$_id.classification', 'vocabulary'] }, then: '[ 문자어휘 / 文字語彙 / Vocabulary ]' },
                  { case: { $eq: ['$_id.classification', 'grammar'] }, then: '[ 문법 / 文法 / Grammar ]' },
                  { case: { $eq: ['$_id.classification', 'reading'] }, then: '[ 독해 / 読解 / Reading ]' },
                  { case: { $eq: ['$_id.classification', 'listening'] }, then: '[ 청해 / 聴解 / Listening ]' },
                ],
                default: ''
              }
            },
            sortNo: {
              $switch: {
                branches: [
                  { case: { $eq: ['$_id.classification', 'vocabulary'] }, then: '0' },
                  { case: { $eq: ['$_id.classification', 'grammar'] }, then: '1' },
                  { case: { $eq: ['$_id.classification', 'reading'] }, then: '2' },
                  { case: { $eq: ['$_id.classification', 'listening'] }, then: '3' },
                ],
                default: 4
              }
            }
          } 
        }
      }
    },
    {
      $project: {
        _id: 0,
        level: '$_id.level',
        classifications: {
          $sortArray: { input: "$classifications", sortBy: { sortNo: 1 } }
        }
      }
    },
    { $sort: { level: 1 } },
  ]);

  return NextResponse.json([...jlptClassInfo1, ...jlptClassInfo2])

  // const jlptClassList = await Jlpt.aggregate([
  //   { '$group' : 
  //       {
  //           '_id' : 'class', 
  //           'levelArr': {'$addToSet' : '$level'}, 
  //           'classificationArr' : {'$addToSet' : '$classification'}, 
  //           'yearArr' : {'$addToSet' : '$year'}, 
  //           'monthArr' : {'$addToSet' : '$month'}, 
  //       }
  //   },
  // ])

  // return NextResponse.json(jlptClassList)
}