const Car = require('../service_cars/Car')

const updatePositionCar = async (req, res) => {
  if (!req.body.lat || !req.body.lng) return res.sendStatus(400)
  const data = {
    lat: req.body.lat,
    lng: req.body.lat
  }
  const [car, response] = await Car.query().updatePositionCar(data, req.params.id)
  if (!car) return res.status(response.status).send({ error: response.message })
  return res.status(response.status).send({ message: response.message})
}

module.exports = {
  updatePositionCar
}
