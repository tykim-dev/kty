import { Schema, model, models } from 'mongoose'

{/*
문제
id.
year: number
grade: string
no: number
question: string
translation: array [
	kor: 한국어
	chn: 중국어
	eng: 영어
]
question_type: group, single
choices: [
	{
		no: 1
		text: '예문'
	},
	{
		no: 2
		text: '예문'
	},
	{
		no: 3
		text: '예문'
	},
	{
		no: 4
		text: '예문'
	}
]


정답
문제1.id	2
문제2.id	4

SELECT 
	CONCAT('{"year":"', year, '", "grade":"', grade, '", "no":', sort, ', "question":"', ifnull(question, ''), '", "translation":[{"kor":"', ifnull(kor, '') ,'"},{"chn":"', ifnull(chn, '') ,'"},{"eng":"', ifnull(eng, '') ,'"}]}') as question 
FROM vocabulary v 
order by year, grade, sort
*/}

const answersSchema = new Schema({
  // 단어구분
  year: {
    type: Number,
    required: true,
    index: true,
  },
  level: {
    type: Number,
    required: true,
    index: true,
  },
  classification: {
    type: String,
    enum: ['voca', 'read', 'listen'],
  },
  questionNo: {
    type: Number,
    required: true,
    index: true,
  },
  answer: {
    type: String,
    required: true,
  },
}, {timestamps: true})

const Answers = models?.answers || model('vocabulary', answersSchema)

export default Answers;