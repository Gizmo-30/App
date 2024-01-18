const express = require('express')
const { Op } = require('sequelize');
const auth = express.Router()
const {User} = require("../models");
const bcrypt = require("bcrypt");
const {login, registration, verifyToken} = require("../controllers/auth");

auth.get('/users', async (req, res) => {
    try{
        const data = await User.findAll()
        res.json(data)
    } catch(error) {
        res.status(500).json({error: "Error fetching data"})
        console.error("Error fetching data ----> ", error)
    }
})

auth.post('/api/auth/signin', login )

auth.post('/api/auth/signup', registration)


module.exports = auth