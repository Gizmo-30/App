const express = require('express')
const {createColl, getColl} = require("../controllers/coll");
const {verifyToken} = require("../controllers/auth");
const coll = express.Router()

coll.post('/api/coll/create', verifyToken, createColl)
coll.get('/api/coll/get',  getColl)

module.exports = coll