const { SnakeNamingStrategy } = require("typeorm-naming-strategies");
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_LOGGING, BUILD } = process.env;

module.exports = {
  type: "postgres",

  database: DB_DATABASE,
  host: DB_HOST,
  password: DB_PASSWORD,
  port: DB_PORT,
  username: DB_USERNAME,
  logging: Boolean(DB_LOGGING),

  cli: {
    migrationsDir: "src/migrations",
  },
  entities: [Boolean(BUILD) ? "build/src/models/*.js" : "src/models/*.ts"],
  migrations: [Boolean(BUILD) ? "build/src/migrations/*.js" : "src/migrations/*.ts"],
  namingStrategy: new SnakeNamingStrategy(),
};
