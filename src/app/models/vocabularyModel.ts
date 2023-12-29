import { Schema, model, models } from 'mongoose'

// 정답 선택 스키마
const ChoiceSchema = new Schema({
  no: Number,
  content: String
});

// 문제 스키마
const QuestionSchema = new Schema({
  content: String,
  audio: String
});

const vocabularySchema = new Schema({
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
  // 문제번호
  sortNo: {
    type: Number,
    required: true,
    index: true,
  },
  // 분류(과목)
  classification: {
    type: String,
    enum: ['vocabulary', 'grammar ', 'reading', 'listening'],
    required: true,
  },
  // 문제번호
  questionNo: {
    type: Number,
    required: false,
    index: false,
  },
  // 문제
  question: {
    type: QuestionSchema,
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
    enum: ['group', 'content', 'normal'],  // group: 그룹문제, content: 지문, normal: 일반문제
    required: true,
  },
  // 선택지
  choices: {
    type: [ChoiceSchema],
    required: false,
  },
}, {timestamps: true})

const Vocabulary = models?.vocabulary || model('vocabulary', vocabularySchema)

export default Vocabulary;