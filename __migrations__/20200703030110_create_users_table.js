
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').unsigned().primary()
    table.string('name', 45).notNullable()
    table.string('last_name', 45).notNullable()
    table.string('email', 45).notNullable()
    table.string('password', 100).notNullable()
    table.integer('id_role').notNullable().unsigned().references('id').inTable('roles').onDelete('no action').onUpdate('no action')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
