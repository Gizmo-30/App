const express = require('express')
const {createColl, getColls, deleteColl, getColl, editColl, getCollsByUser, getCollByType, getCollToEdit} = require("../controllers/coll");
const {verifyToken} = require("../controllers/auth");
const coll = express.Router()


coll.post('/api/coll/create', verifyToken, createColl)
coll.get('/api/coll/get/all/user', verifyToken, getCollsByUser)
coll.get('/api/coll/get/all', getColls)
coll.get('/api/coll/get',getCollToEdit, getCollByType)
coll.post('/api/coll/delete', deleteColl)
coll.post('/api/coll/get/one', getColl)
coll.post('/api/coll/edit', editColl)

module.exports = coll