import knex from "knex";
import mysql2 from 'mysql2'

const db = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "sm",
  },
  pool: { min: 0, max: 10 },
});

export default db;
