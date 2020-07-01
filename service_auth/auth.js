const passport = require('passport')
const moment = require('moment')
const { ExtractJwt, Strategy } = require('passport-jwt')
const User = require('../service_user/User')
const config = require('../config/jwt')
const jwt = require('jwt-simple')

const login = async (req, res) => {
  if (!req.body.email || !req.body.password) return res.sendStatus(401)
  const { email, password } = req.body
  const [user, resp] = await User.query().login(email, password)
  if (!user) return res.status(resp.status).send(resp.message)
  const payload = {
    id: user.id,
    name: user.name,
    role: user.id_role,
    iat: moment().unix(),
    exp: moment().add(480, 'minutes').unix()
  }

  const token = jwt.encode(payload, config.jwtSecret)
  return res.status(200).send({
    token: token
  })
}

module.exports = (function () {
  const params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  }

  const strategy = new Strategy(params, async function (payload, done) {
    if (moment().isAfter(payload.expired_at)) {
      console.log('Token expired')
      return done(null, false, { message: 'Token expired' })
    }

    const { id } = payload
    const [user] = await User.query().getById(id)

    if (!user) return done(null, false)

    return done(null, {
      id: user.id,
      name: user.name,
      last_name: user.last_name,
      email: user.email,
      id_role: user.id_role
    })
  })

  passport.use(strategy)

  return {
    login,
    initialize: function () {
      return passport.initialize()
    },
    authenticate: function () {
      return passport.authenticate('jwt', config.jwtSession)
    }
  }
}())
