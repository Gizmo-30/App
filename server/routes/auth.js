const express = require('express')
const { Op } = require('sequelize');
const auth = express.Router()
const {User} = require("../models");
const bcrypt = require("bcrypt");

auth.get('/', (req, res) => {
    res.send(`<div>hello world  
        <a href="/users">users</a>
        <a href="/login">login</a>
        </div>`)
})

auth.get('/users', async (req, res) => {
    try{
        const data = await User.findAll()
        res.json(data)
    } catch(error) {
        res.status(500).json({error: "Error fetching data"})
        console.error("Error fetching data ----> ", error)
    }
})

auth.post('/login', async (req, res) => {
    const {username, password} = req.body
    const searchResult = await User.findAll({where: {username: username}})

    if(!searchResult.length) return res.status(401).send('Invalid username')

    let match = await bcrypt.compare(password, searchResult[0].password)

    if (!match) return res.status(401).send('Invalid password')
    res.sendStatus(200)
})

auth.post('/registration', async(req,res) => {
    const {username, email, password} = req.body

    // validation
    const searchUsername = await User.findAll({where: {username,}})
    const searchEmail = await User.findAll({where: {email,}})
    if(searchUsername.length) return res.status(409).send("Username already in use")
    if(searchEmail.length) return res.status(409).send("Email already in use")

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({username, email, password: hashedPassword,})
        res.sendStatus(200)
    } catch (e) {
        console.error("Error creating user ----->",e)
        res.status(500).send("Internal server error")
    }
})

module.exports = auth