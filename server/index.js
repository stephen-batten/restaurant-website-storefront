const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/router')
require('dotenv/config')

const app = express()

app.use(express.urlencoded({ extended:true }))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/', router)

const database = process.env.MONGODB_URI
const port = process.env.PORT

mongoose.connect(database)
.then(() => console.log('Database Connected.'))
.catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})
