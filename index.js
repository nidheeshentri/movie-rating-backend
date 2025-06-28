const express = require("express")
const mongoose = require('mongoose');
const MovieModel = require("./src/models/movieModel")



mongoose.connect('mongodb+srv://nidheeshb:FVqJTEEdvFdAV4ca@main.n0z4rvu.mongodb.net/?retryWrites=true&w=majority&appName=main')
.then(res => {
  console.log("MongoDB connected")
})
.catch(err => {
  console.log(err)
  console.log("MongoDB connection error")
})

const moviesRouter = require("./src/routes/moviesRouter")
const userRouter = require("./src/routes/userRouter")
const sampleMiddleware = require("./src/middlewares/testMiddleware")

const app = express()

const port = 3000
var cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:5173',
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(sampleMiddleware)

app.use("", moviesRouter)

app.use("/user", userRouter)

app.listen(port, () => {
    console.log(`Server running on  http://127.0.0.1:${port}`)
})