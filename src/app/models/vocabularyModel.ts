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

const vocabularySchema = new Schema({
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
  no: {
    type: Number,
    required: true,
    index: true,
  },
  question: {
    type: String,
    required: true,
  },
  translation: {
    type: Array,
    require: false,
  },
  questionType: {
    type: String,
    enum: ['group', 'normal'],
    required: true,
  },
  choices: {
    type: Array,
    required: false,
  },
}, {timestamps: true})

const Vocabulary = models?.vocabulary || model('vocabulary', vocabularySchema)

export default Vocabulary;