const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const transactions = require('./routes/transactions')
const connectDB = require('./config/db')
dotenv.config({ path: './config/config.env'})

connectDB()

const app = express()

app.use(express.json())
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Running In ${process.env.NODE_ENV} Mode On Port ${PORT}`.america.bold))