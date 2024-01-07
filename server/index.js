const express = require('express')
const cors = require('cors');
const path = require('path');
const router = require("./routes/router");
const bodyParser = require('body-parser');
const db = require("./models");
const {users} = require("./models")

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const PORT = process.env.PORT || 4000;

//
//
//

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use('/', router)
app.get('/', (req,res) => {
    res.send(`<div>
       hello world  
       <a href="/users">users</a>
       <a href="/test">test</a>
       </div>`)
})

db.sequelize.sync().then((req) => {
    app.listen(PORT, (req,res) => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
})

