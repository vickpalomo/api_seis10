const { updatePositionCar } = require('./positionController')
const router = require('express').Router()

router.patch('/:id', updatePositionCar)

module.exports = router
