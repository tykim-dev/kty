import { Schema, model, models } from 'mongoose'

const vocabularySchema = new Schema({
  // 년도
  year: {
    type: Number,
    required: true,
    index: true,
  },
  // 회차
  order: {
    type: Number,
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
  no: {
    type: Number,
    required: true,
    index: true,
  },
  // 문제
  question: {
    type: String,
    required: true,
  },
  // 해석
  translation: {
    type: Array,
    require: false,
  },
  // 문제 구분
  questionType: {
    type: String,
    enum: ['group', 'normal'],  // group: 그룹문제, normal: 일반문제
    required: true,
  },
  // 선택지
  choices: {
    type: Array,
    required: false,
  },
}, {timestamps: true})

const Vocabulary = models?.vocabulary || model('vocabulary', vocabularySchema)

export default Vocabulary;