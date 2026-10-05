const express = require('express')
const dns = require('dns');
require('dotenv').config({ path: '.env' })

dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = require('./db/connect.js')
const notFoundMiddleware = require('./middleware/not_found.js')
const errorHandlerMiddleware = require('./middleware/error_handler.js')
const towers = require('./routes/towers.js')

const app = express()

// middleware
app.use(express.json())

// routes
app.use('/api/v1/towers', towers)

// errors handling
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
