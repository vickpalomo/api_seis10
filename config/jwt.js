require('dotenv').config()

module.exports = {
  jwtSecret: process.env.key_token,
  jwtSession: { session: false }
}
