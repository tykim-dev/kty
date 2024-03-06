import { Schema, model, models } from 'mongoose'

const wordSchema = new Schema({
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
}, {timestamps: true, collection: 'word'})

const Word = models?.word || model('word', wordSchema)

export default Word;