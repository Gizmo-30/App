const mysql = require('mysql2');
const path = require('path');
const {Sequelize} = require("sequelize");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect:'mysql',
    dialectModule: require('mysql2'),
});

module.exports = sequelize;