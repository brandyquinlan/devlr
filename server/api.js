const path = require('path')

module.exports = (app) => {
  // This is for heroku so that React Router works
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })
}
