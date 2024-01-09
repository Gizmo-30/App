const path = require("path");
const mysql2 = require("mysql2");
const fs = require("fs");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: mysql2,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: mysql2,
  },
  production: {
    username: process.env.DB_PRODUCTION_USER,
    password: process.env.DB_PRODUCTION_PASSWORD,
    database: process.env.DB_PRODUCTION_DATABASE,
    host: process.env.DB_PRODUCTION_HOST,
    dialect: "mysql",
    dialectModule: mysql2,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  }
}
