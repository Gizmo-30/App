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

// try{
//     db.sequelize.sync().then(r => console.log(r)).catch(e => console.error(e))
//     console.log("Connected to database")
// } catch (e) {
//     console.error('Unable to connect to the database --->', e);
// }


module.exports = router