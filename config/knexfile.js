require('dotenv').config()
const Knex = require('knex')
const { Model } = require('objection')
const config = require('./config')[process.env.NODE_ENV]

const knex = Knex(config)

Model.knex(knex)
