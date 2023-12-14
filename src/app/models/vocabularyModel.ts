import { Schema, model, models } from 'mongoose'

{/*
문제그룹
id: string
question: string
parent_question: string

문제
id.
year: number
grade: string
no: number
question: string
choices: array[1.예1,2.예2,3.예3,4.예4]
translation: array [
	kor: 한국어
	chn: 중국어
	eng: 영어
]
group_id: string


정답
문제1.id	2
문제2.id	4
*/}

const vocabularySchema = new Schema({
  // 단어구분
  type: {
    type: String,
    required: true,
    index: true,
  },
  level: {
    type: String,
    required: true,
    index: true,
  },
  word: {
    type: String,
    required: false,
    index: true,
  },
  read: {
    type: String,
    required: true,
  },
  means: {
    type: Array,
    required: true,
  },
  parts: {
    type: Array,
    required: false,
  },
}, {timestamps: true})

const Vocabulary = models?.vocabulary || model('vocabulary', vocabularySchema)

export default Vocabulary;