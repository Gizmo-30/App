const express = require('express')
const {createColl, getColls} = require("../controllers/coll");
const {verifyToken} = require("../controllers/auth");
const coll = express.Router()

coll.post('/api/coll/create', verifyToken, createColl)
coll.get('/api/coll/get/all', verifyToken, getColls)

module.exports = coll