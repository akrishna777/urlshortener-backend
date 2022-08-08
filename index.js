import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

// Database Connection Configurations:

// Error Handler Import
import errorHandler from './Middlewares/error.js'

// Router Imports
import authRouter from './Routes/Auth.js'
import shortUrlRouter from './Routes/ShortUrls.js'
import ShortUrl from './Models/shortUrls.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/auth', authRouter)
app.use('/shortUrls', shortUrlRouter)

app.use('/', (req, res) => {
  res.send('Welcome to Url Shortner API')
})

app.use(errorHandler)

const PORT = 5000 || process.env.PORT

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)),
  )
  .catch((error) => console.log(error.message))
