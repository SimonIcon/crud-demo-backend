const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()
// creating app

// import routes
const userRoutes = require('./src/routes/userRoute')
const dbConnect = require('./src/config/dbConnect')


const app = express()

// middleware
app.use(bodyParser.json())

// routes middleware
app.use('/', userRoutes)


// starting server
dbConnect()
app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`)
})