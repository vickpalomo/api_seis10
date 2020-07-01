const Car = require('./Car')

const listCars = async (req, res) => {
  const [cars, response] = await Car.query().listCars(req.user.id, req.user.id_role)
  if (!cars) return res.status(response.status).send({ error: response.message })
  return res.status(response.status).json(cars)
}

const getById = async (req, res) => {
  if (!Number.isInteger(req.params.id)) return res.status(400).send({ error: 'El parametro enviado es invalido.' })
  const [car, response] = await Car.query().getById(req.params.id, req.user.id)
  if (!car) return res.status(response.status).send({ error: response.message })
  return res.status(response.status).json(car)
}

const insertCar = async (req, res) => {
  const data = req.body
  data['id_user'] = req.user.id
  const [car, response] = await Car.query().insertCar(data)
  if (!car) return res.status(response.status).send({ error: response.message })
  return res.status(response.status).json(car)
}

const patchCar = async (req, res) => {
  if (!Number.isInteger(req.params.id)) return res.status(400).send({ error: 'El parametro enviado es invalido.' })
  const data = req.body
  const [car, response] = await Car.query().updateCar(data, req.user.id, req.params.id)
  if (!car) return res.status(response.status).send({ error: response.message })
  return res.status(response.status).json(car)
}

const deleteCar = async (req, res) => {
  if (!Number.isInteger(req.params.id)) return res.status(400).send({ error: 'El parametro enviado es invalido.' })
  const [row, response] = await Car.query().deleteCar(req.user.id, req.params.id)
  if (!row) return res.status(response.status).send({ error: response.message })
  return res.status(response.status).send({ message: response.message })
}

module.exports = {
  listCars,
  getById,
  insertCar,
  patchCar,
  deleteCar
}
