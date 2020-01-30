module.exports = {

  dev: {
    client: "sqlite3",
    connection: { filename: "./data/gigapets.db3", },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
  
  test: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./data/dbConfig.js"
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};