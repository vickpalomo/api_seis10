const { listCars, getById, insertCar, patchCar, deleteCar } = require('./carsController')
const router = require('express').Router()

router.get('/', listCars)
router.get('/:id', getById)
router.post('/', insertCar)
router.patch('/:id', patchCar)
router.delete('/:id', deleteCar)

module.exports = router
