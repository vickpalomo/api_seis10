const { Model, QueryBuilder } = require('objection')
const User = require('../service_user/User')
const errorParser = require('../helpers/error_parser')

class MyQueryBuilder extends QueryBuilder {
  listCars (id_user, id_role) {
    if (id_role === 1) {
      return this
        .then((cars) => {
          if (cars.length === 0) return [undefined, { status: 404, message: 'Automoviles no encontrados' }]
          return [cars, { status: 200, message: 'Automoviles Encontrados' }]
        })
        .catch((err) => {
          console.log(err)
          return [undefined, { status: 500, message: 'Internal Server Error' }]
        })
    }
    return this
      .where({ id_user })
      .then((cars) => {
        if (cars.length === 0) return [undefined, { status: 404, message: 'Automoviles no encontrados' }]
        return [cars, { status: 200, message: 'Automoviles Encontrados' }]
      })
      .catch((err) => {
        console.log(err)
        return [undefined, { status: 500, message: 'Internal Server Error' }]
      })
  }

  getById (id, id_user) {
    return this
      .where({ id })
      .then(([car]) => {
        if (!car) return [undefined, { status: 404, message: 'Automovil no encontrado' }]
        if (car.id_user !== id_user) return [undefined, { status: 401, message: 'No tiene permisos para visualizar este recurso' }]
        return [car, { status: 200, message: 'Automovil encontrado' }]
      })
      .catch((err) => {
        console.log(err)
        return [undefined, { status: 500, message: 'internal server error' }]
      })
  }

  insertCar (car) {
    return this
      .insert(car)
      .then((car) => {
        return [car, { status: 201, message: 'Automovil insertado con exito' }]
      })
      .catch((err) => {
        console.log('errores del objection: ', err)
        const errors = errorParser(err)
        return [undefined, { status: errors.status, message: errors.message }]
      })
  }

  updateCar (data, id_user, id_car) {
    return this
      .findById(id_car)
      .then((car) => {
        if (car.id_user !== id_user) return [undefined, { status: 401, message: 'No tiene permisos para modificar este recurso' }]
        return this
          .patchAndFetchById(id_car, data)
          .then((car) => {
            return [car, { status: 200, message: 'Automovil actualizado con exito' }]
          })
          .catch((err) => {
            console.log('errores del objection: ', err)
            const errors = errorParser(err)
            return [undefined, { status: errors.status, message: errors.message }]
          })
      })
      .catch((err) => {
        console.log(err)
        return [undefined, { status: 500, message: 'internal server error' }]
      })
  }

  deleteCar (id_user, id_car) {
    return this
      .findById(id_car)
      .then((car) => {
        if (!car) return [undefined, { status: 404, message: 'Automovil no encontrado' }]
        if (car.id_user !== id_user) return [undefined, { status: 401, message: 'No tiene permisos para elminar este recurso' }]
        return this
          .deleteById(id_car)
          .then((number_deleted_rows) => {
            return [number_deleted_rows, { status: 200, message: 'Automovil eliminado con exito' }]
          })
          .catch((err) => {
            console.log(err)
            return [undefined, { status: 500, message: 'internal server error' }]
          })
      })
      .catch((err) => {
        console.log(err)
        return [undefined, { status: 500, message: 'internal server error' }]
      })
  }
}

class Car extends Model {
  static get tableName () {
    return 'cars'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['plates', 'brand', 'color', 'model', 'id_user'],
      properties: {
        plates: { type: 'string', minLength: 1, maxLength: 45 },
        brand: { type: 'string', minLength: 1, maxLength: 45 },
        color: { type: 'string', minLength: 1, maxLength: 45 },
        model: { type: 'string', minLength: 1, maxLength: 45 },
        lat: { type: 'number' },
        lng: { type: 'number' },
        id_user: { type: 'integer', minimum: 1 }
      }
    }
  }

  static get relationMappings () {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'cars.id_user',
          to: 'users.id'
        }
      }
    }
  }

  static get QueryBuilder () {
    return MyQueryBuilder
  }
}

module.exports = Car
