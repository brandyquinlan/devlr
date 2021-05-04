const express = require('express')
const path = require('path')

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

app.listen(PORT, () => {
  console.log(`Server online and listening on ${PORT}`)
})
