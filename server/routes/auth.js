const express = require('express')
const auth = express.Router()
const {User} = require("../models");

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
    if (searchResult[0].password !== password) return res.status(401).send('Invalid password')
    res.sendStatus(200)
})

module.exports = auth