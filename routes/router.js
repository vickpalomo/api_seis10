const router = require('express').Router()
const { authenticate } = require('../service_auth/auth')
const auth = require('../service_auth/routes')
const cars = require('../service_cars/routes')

router.use(auth)
router.use('/cars', authenticate(), cars)
module.exports = router
