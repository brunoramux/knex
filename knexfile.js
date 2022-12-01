// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg', //cliente para postgre
    connection: {
      database: "bruno",
      user: "postgres",
      password: "92727340"
    }
  }

};
