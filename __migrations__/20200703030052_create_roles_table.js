
exports.up = function (knex) {
  return knex.schema.createTable('roles', function (table) {
    table.increments('id').primary()
    table.string('name', 45).notNullable()
    table.string('description', 255).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('roles')
}
