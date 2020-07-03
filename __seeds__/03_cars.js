
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert([
        {
          plates: 'AAA-00-01',
          brand: 'Toyota',
          color: 'Azul',
          model: 'Corolla',
          id_user: 1
        },
        {
          plates: 'TY-QW-123',
          brand: 'Honda',
          color: 'Rojo',
          model: 'Civic',
          id_user: 1
        },
        {
          plates: 'QWE-98-41',
          brand: 'Ford',
          color: 'Blanco',
          model: 'Fiesta',
          id_user: 2
        },
        {
          plates: 'ASF-AS-12',
          brand: 'Nissan',
          color: 'Negro',
          model: 'Tsuru',
          id_user: 2
        }
      ])
    })
}
