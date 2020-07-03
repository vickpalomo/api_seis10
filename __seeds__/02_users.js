
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Vick',
          last_name: 'Palomo',
          email: 'ing.victorpalomo@gmail.com',
          password: '$2a$10$COnaOOIadn2oAMJbjNux4uqhs8mw2r8uf2GiJj7odcTyjM.VwBGWy',
          id_role: 1
        },
        {
          name: 'Jorge',
          last_name: 'Medrano',
          email: 'jorge@seis10.com',
          password: '$2a$10$yaptGHkvDC4ADLpxpraK5.IHZDooGlbE1G2HRE0/EQhIfLxg0WMva',
          id_role: 2
        }
      ])
    })
}
