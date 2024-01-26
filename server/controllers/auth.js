const {User} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, './.env')})

const privateKey = process.env.PRIVATE_KEY

exports.login = async (req,res) => {
    const {username, password} = req.body
    const searchResult = await User.findOne({where: {username,}})

    if(!searchResult) return res.status(401).send('Invalid username')

    let match = await bcrypt.compare(password, searchResult.password)
    if (!match) return res.status(401).send('Invalid password')

    const token = await jwt.sign({username: username, role: searchResult.role}, privateKey, {expiresIn: '2h'})
    res.status(200).json({accessToken: token, username: searchResult.username, role: searchResult.role});
}

exports.registration = async (req,res) => {
    const {username, email, password} = req.body

    // validation
    const searchUsername = await User.findAll({where: {username,}})
    const searchEmail = await User.findAll({where: {email,}})
    if(searchUsername.length) return res.status(409).send("Username already in use")
    if(searchEmail.length) return res.status(409).send("Email already in use")

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({username, email, password: hashedPassword,})
        const searchResult = await User.findAll({where: {username, email,}})
        res.status(200).send(searchResult)
    } catch (e) {
        console.error("Error creating user ----->",e)
        res.status(500).send("Internal server error")
    }
}

exports.verifyToken = (req,res,next) => {
    const token = req.headers['authorization']
    if(!token) return res.status(403).send("No token provided")

    jwt.verify(token, privateKey, function (err,decoded){
        if (err) return res.status(401).send("Unauthorized");

        req.tokenData = decoded;
        next()
    })
}

exports.users = async (req,res) => {
    try{
        const data = await User.findAll()
        res.json(data)
    } catch(error) {
        res.status(500).json({error: "Error fetching data"})
        console.error("Error fetching data ----> ", error)
    }
}

