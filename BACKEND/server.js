require('dotenv').config()
const express = require('express')
const app = express()
const port = 3080
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const cors = require("cors")

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database"))

app.use(express.json());
app.use(cors({
  origin: '*'
}));

const userRouter = require('./routes/user')
app.use('/user', userRouter)

const settingsRouter = require('./routes/settings')
app.use('/settings', settingsRouter)


const loginRouter = require('./routes/login')
app.use('/login', loginRouter)

const tradeRouter = require('./routes/trade')
app.use('/trade', tradeRouter)


app.listen(port, () => {
  console.log(`localhost:${port}`)
})

