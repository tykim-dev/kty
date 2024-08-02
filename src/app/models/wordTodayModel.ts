import { Schema, model, models } from 'mongoose'

// 문제 스키마
const QuestionSchema = new Schema({
  question: String,
  choice: Array<string>,
});

const wordTodaySchema = new Schema({
  // 년도
  year: {
    type: String,
    required: true,
    index: true,
  },
  // 월
  month: {
    type: String,
    required: true,
    index: true,
  },
  // 등급
  level: {
    type: String,
    required: true,
    index: true,
  },
  // 문제번호
  questionNo: {
    type: Number,
    required: true,
  },
  // 단어
  word: {
    type: String,
    required: true,
  },
  // 읽기
  read: {
    type: String,
    required: true,
  },
  // 뜻
  means: {
    type: String,
    required: true,
  },
  // 문장
  sentence: {
    type: String,
    required: true,
  },
  // 해석
  translate: {
    type: String,
    required: true,
  },
  // 문제
  question: {
    type: QuestionSchema,
    required: true,
  },
  // 정답
  answer: {
    type: Number,
    required: false,
  },
}, {timestamps: true, collection: 'word_today'})

const WordToday = models?.wordToday || model('wordToday', wordTodaySchema)

export default WordToday;