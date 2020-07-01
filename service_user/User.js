const { Model, QueryBuilder } = require('objection')
const Car = require('../service_cars/Car')
const Role = require('../service_roles/Role')
const bcrypt = require('bcryptjs')

class MyQueryBuilder extends QueryBuilder {
  login (email, password) {
    return this
      .where({ email })
      .then(([user]) => {
        if (!user) return [undefined, { status: 401, message: 'Los datos ingresados no son correctos' }]
        if (!bcrypt.compareSync(password, user.password)) return [undefined, { status: 401, message: 'Los datos ingresados no son correctos' }]
        return [user, { status: 200, message: 'Datos Correctos' }]
      })
      .catch((err) => {
        console.log(err)
        return [undefined, { status: 500, message: 'internal server error' }]
      })
  }

  getById (id) {
    return this
      .where({ id })
      .then(([user]) => {
        if (!user) return [undefined, { status: 404, message: 'User not found' }]
        return [user, { status: 200, message: 'User found' }]
      })
      .catch((err) => {
        console.log(err)
        return [undefined, { status: 500, message: 'internal server error' }]
      })
  }
}

class User extends Model {
  static get tableName () {
    return 'users'
  }

  static get relationMappings () {
    return {
      role: {
        relation: Model.HasOneRelation,
        modelClass: Role,
        join: {
          from: 'users.id_role',
          to: 'roles.id'
        }
      },

      cars: {
        relation: Model.HasManyRelation,
        modelClass: Car,
        join: {
          from: 'users.id',
          to: 'cars.id_user'
        }
      }
    }
  }

  static get QueryBuilder () {
    return MyQueryBuilder
  }
}

module.exports = User
