const mongoose = require("mongoose")

const connectDB = async (url) => {
    if (!url) {
        throw new Error('MONGO_URI is not configured')
    }

    await mongoose.connect(url, { dbName: process.env.MONGO_DB_NAME || 'DB_23IT010' })
    console.log(`Connected to MongoDB database ${process.env.MONGO_DB_NAME || 'DB_23IT010'}`)
}

module.exports = connectDB