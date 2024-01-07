const path = require("path");
const mysql2 = require("mysql2");
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: mysql2,
    dialectOptions: {
      bigNumberStrings: true,
    }
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: mysql2,
    dialectOptions: {
      bigNumberStrings: true,
    }
  }
}
