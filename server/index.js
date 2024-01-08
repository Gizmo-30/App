const express = require('express')
const cors = require('cors');
const path = require('path');
const router = require("./routes/router");
const bodyParser = require('body-parser');
const db = require("./models");
const {User} = require("./models");
const {Sequelize} = require("sequelize");
const mysql2 = require('mysql2');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const PORT = process.env.PORT || 4000;


//
//
//
const app = express()
app.use(cors())
app.use(bodyParser.json());

try{
    db.sequelize.sync().then(r => console.log(r)).catch(e => console.error(e))
    app.listen(PORT, (req,res) => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
} catch (e) {
    console.error('Unable to connect to the database --->', e);
}

app.use('/', router)

app.get('/users', async (req,res) => {
    try{
        const data = await User.findAll()
        res.json(data)
    } catch(error) {
        res.status(500).json({error: "Error fetching data"})
        console.error("Error fetching data ----> ", error)
    }
})



