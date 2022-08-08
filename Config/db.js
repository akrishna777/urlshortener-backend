import mongoose from 'mongoose'

const connectDB = async () => {
  await mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  console.log('MongoDB connected')
}

export default connectDB
