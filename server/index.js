const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/build')))

require('./api')(app)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/database', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

app.listen(PORT, () => {
  console.log(`Server online and listening on ${PORT}`)
})
