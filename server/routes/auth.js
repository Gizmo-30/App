const express = require('express')
const { Op } = require('sequelize');
const auth = express.Router()
const {User} = require("../models");
const bcrypt = require("bcrypt");
const {login, registration, verifyToken, users} = require("../controllers/auth");

auth.get('/api/auth/users', users)

auth.post('/api/auth/signin', login)

auth.post('/api/auth/signup', registration)


module.exports = auth