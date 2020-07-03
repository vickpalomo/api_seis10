const express = require('express')
const app = express()
const socket = require('socket.io')
require('./config/knexfile')
require('dotenv').config()

app.use('/api-documentation', express.static('doc'))

const serve = app.listen(process.env.port, function (err) {
  if (err) throw err
  console.log('Its Alive')
})

const io = socket(serve)

io.on('connect', () => {
  console.log('Communication channel established')
})

module.exports = {
  app,
  io
}
