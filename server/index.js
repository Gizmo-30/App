const express = require('express')
const cors = require('cors');
const path = require('path');
const router = require("./routes/router");
const app = express()
const db = require("./models")
const {Users} = require("./models")
const {Sequelize} = require("sequelize");
const sequelize = require("./db");

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const PORT = process.env.PORT || 4000;

//
//
//
app.use(cors())
app.use('/users', router)
sequelize.sync().then(res => console.log('synced'))

app.get('/', (req,res) => {
    res.send(`<div>
       hello world  
       <a href="/users">users</a>
       <a href="/test">test</a>
       </div>`)
})
app.get('/test', async (req,res) => {

    await Users.create({
        username: 'asdfasfd',
        email: 'aaaasdfasfda@gmail.com',
        password: '123',
        role: 'user',
        status: 'active',
    })
        .then(result => res.send('its working'))
        .catch(err => {
            if(err) {
                console.error("Error creating user")
                res.send(err.original.sqlMessage)
            }
        })
})

db.sequelize.sync().then((req) => {
    app.listen(PORT, (req,res) => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
})

