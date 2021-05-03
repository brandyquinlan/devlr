<<<<<<< HEAD
const express = require('express')
const path = require('path')
=======
const express = require("express");
const path = require("path");
>>>>>>> circleci-work

const PORT = process.env.PORT || 3001
const app = express()

<<<<<<< HEAD
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/build')))

require('./api')(app)
=======
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

require("./api")(app);
>>>>>>> circleci-work

app.listen(PORT, () => {
  console.log(`Server online and listening on ${PORT}`)
})
