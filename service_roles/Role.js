const { Model } = require('objection')
const User = require('../service_user/User')
const { HasManyRelation } = require('../service_user/User')

class Role extends Model {

  static get tableName () {
    return 'roles'
  }

  static get relationMappings () {
    return {
      user: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'roles.id',
          to: 'user.id_role'
        }
      }
    }
  }
}

module.exports = Role
