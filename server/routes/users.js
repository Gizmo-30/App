const express = require('express')
const users = express.Router()
const {User} = require("../models");
const {changeStatus} = require("../controllers/users");

users.post('/api/users/change', changeStatus)


module.exports = users