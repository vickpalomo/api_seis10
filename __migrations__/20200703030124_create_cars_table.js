
exports.up = function (knex) {
  return knex.schema.createTable('cars', function (table) {
    table.increments('id').unsigned().primary()
    table.string('plates', 45).notNullable()
    table.string('brand', 45).notNullable()
    table.string('color', 45).notNullable()
    table.string('model', 100).notNullable()
    table.decimal('lat', 10, 8)
    table.decimal('lng', 10, 8)
    table.integer('id_user').notNullable().unsigned().references('id').inTable('users').onDelete('no action').onUpdate('no action')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('cars')
}
