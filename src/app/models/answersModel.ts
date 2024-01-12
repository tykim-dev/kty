import { Schema, model, models } from 'mongoose'

const answersSchema = new Schema({
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
    required: true,
  },
}, {timestamps: true})

answersSchema.index({ year: 1, month: 1, level: 1, questionNo: 1, classification: 1, }, { unique: true });
const Answers = models?.answers || model('answers', answersSchema)

export default Answers;