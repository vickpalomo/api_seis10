const router = require('./routes/router')
const bodyParser = require('body-parser')
const { initialize } = require('./service_auth/auth')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const express = require('express')
const app = express()
require('./config/knexfile')

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

// helmet
app.use(helmet())

// CORS config

app.use(cors({
  origin: '*',
  methods: [
    'GET', 'POST', 'PATCH', 'DELETE'
  ],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
}))

// Compression
app.use(compression())

// Para cargar auth.js durante el tiempo de arranque del servidor e iniciar el middleware de Passport
app.use(initialize())

// DEFINIMOS LAS RUTAS
app.use(router)

app.listen(3001, function (err) {
  if (err) throw err
  console.log('Its Alive')
})
