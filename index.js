import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

// Database Connection Configurations:
import connectDB from './Config/db.js'
dotenv.config({ path: './config.env' })

// Error Handler Import
import errorHandler from './Middlewares/error.js'

// Router Imports
import authRouter from './Routes/Auth.js'
import shortUrlRouter from './Routes/ShortUrls.js'
import ShortUrl from './Models/shortUrls.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: false }))
app.use(cors())

app.use('/auth', authRouter)
app.use('/shortUrls', shortUrlRouter)

app.use('/', (req, res) => {
  res.send('Welcome to Url Shortner API')
})

app.use(errorHandler)

const PORT = 5000 || process.env.PORT

connectDB()

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`),
)

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`)
  server.close(() => process.exit(1))
})
