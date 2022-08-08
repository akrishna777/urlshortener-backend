import mongoose from 'mongoose'
import shortid from 'shortid'

const shortUrlSchema = mongoose.Schema({
  fullurl: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortid.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
})

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema)

export default ShortUrl
