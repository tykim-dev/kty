import { Schema, model, models } from 'mongoose'

const wordSchema = new Schema({
  // 단어구분
  type: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  word: {
    type: String,
    required: false,
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

const Word = models.word || model('word', wordSchema)

export default Word;