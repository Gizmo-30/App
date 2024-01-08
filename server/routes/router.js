const express = require('express')
const router = express.Router()
const {User} = require("../models");
const db = require("../models");

router.get('/', (req,res) => {
    res.send(`<div>
       hello world  
       <a href="/users">users</a>
       </div>`)
})

try{
    db.sequelize.sync().then(r => console.log(r)).catch(e => console.error(e))
} catch (e) {
    console.error('Unable to connect to the database --->', e);
}

router.get('/users', async (req,res) => {
    try{
        const data = await User.findAll()
        res.json(data)
    } catch(error) {
        res.status(500).json({error: "Error fetching data"})
        console.error("Error fetching data ----> ", error)
    }
})





module.exports = router