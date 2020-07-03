
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {
          name: 'admin',
          description: 'Permite al usuario ver todos lo automoviles del sistema'
        },
        {
          name: 'user',
          description: 'Permite al usuario ver los automoviles de su propiedad'
        }
      ])
    })
}
