require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database"))

app.use(express.json());

const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`localhost:${port}`)
})