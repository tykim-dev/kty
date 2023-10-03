import { Schema, model, models } from 'mongoose'

const codeDetailSchema = new Schema({
  // 단어구분
  code: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
    index: true,
  },
  sort: {
    type: Number,
    required: false,
  },
}, {timestamps: true})

const CodeDetail = models?.codeDetail || model('codeDetail', codeDetailSchema)

export default CodeDetail;