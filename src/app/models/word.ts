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
    required: true,
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
    required: true,
  },
}, {timestamps: true})

const Word = models.user || model('word', wordSchema)

export default Word;