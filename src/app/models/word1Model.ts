import { Schema, model, models } from 'mongoose'

const word1Schema = new Schema({
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
}, {timestamps: true})

const Word1 = models?.word1 || model('word1', word1Schema)
const Word2 = models?.word2 || model('word2', word1Schema)
const Word3 = models?.word3 || model('word3', word1Schema)
const Word4 = models?.word4 || model('word4', word1Schema)
const Word5 = models?.word5 || model('word5', word1Schema)

export {
  Word1,
  Word2,
  Word3,
  Word4,
  Word5,
};