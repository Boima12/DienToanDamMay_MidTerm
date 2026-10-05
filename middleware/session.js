const session = require('express-session')
const { MongoStore } = require('connect-mongo')

const createSessionMiddleware = () => {
  const mongoUrl = process.env.MONGO_SESSION_URI || process.env.MONGO_URI_USER_WRITEONLY
  if (!mongoUrl) {
    throw new Error('MONGO_SESSION_URI or MONGO_URI_USER_WRITEONLY is not configured')
  }
  if (!process.env.SESSION_SECRET) {
    throw new Error('SESSION_SECRET is not configured')
  }

  return session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl,
      dbName: process.env.MONGO_DB_NAME || 'DB_23IT010',
      collectionName: 'sessions',
    }),
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60,
    },
  })
}

module.exports = createSessionMiddleware
