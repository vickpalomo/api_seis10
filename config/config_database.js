const { development } = require("./config")

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      user: 'seis10',
      password: 'seis10',
      database: 'seis10'
    },
    migrations: {
      directory: '../__migrations__'
    },
    seeds: {
      directory: '../__seeds__'
    }
  }

}
