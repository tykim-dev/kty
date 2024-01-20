import { Schema, model, models } from 'mongoose'

const answersJlptSchema = new Schema({
  // 년도
  year: {
    type: Number,
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
  // 분류(과목)
  classification: {
    type: String,
    enum: ['vocabulary', 'grammar ', 'reading', 'listening'],
  },
  // 문제번호
  questionNo: {
    type: Number,
    required: true,
    index: true,
  },
  // 정답
  answer: {
    type: String,
    required: false,
  },
}, {timestamps: true})

answersJlptSchema.index({ classification: 1, year: 1, month: 1, level: 1, questionNo: 1 }, { unique: true });
const AnswersJlpt = models?.answers || model('answersJlpt', answersJlptSchema)

export default AnswersJlpt;