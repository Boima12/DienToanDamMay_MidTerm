const express = require('express')
const { engine } = require('express-handlebars')
const dns = require('dns');
require('dotenv').config({ path: '.env' })

dns.setServers(['8.8.8.8', '8.8.4.4']);

const { connectReadWrite } = require('./db/connections.js')
const createSessionMiddleware = require('./middleware/session.js')
const notFoundMiddleware = require('./middleware/not_found.js')
const errorHandlerMiddleware = require('./middleware/error_handler.js')
const books = require('./routes/books.js')
<<<<<<< HEAD
=======
const web = require('./routes/web.js')
>>>>>>> work_session

const app = express()

// middleware
app.use(express.json())
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(createSessionMiddleware())

// routes
app.use('/api/v1/books', books)
<<<<<<< HEAD
=======
app.use('/', web)
>>>>>>> work_session

// errors handling
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectReadWrite()

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
