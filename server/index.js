const express = require('express')
const cors = require('cors');
const path = require('path');
const auth = require("./routes/auth");
const bodyParser = require('body-parser');
const db = require("./models");
const {User} = require("./models");
const coll = require("./routes/coll");
const users = require("./routes/users");
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const PORT = process.env.PORT || 4000;


//
//
//
const app = express()

app.use(cors())
app.use(bodyParser.json());
// db.sequelize.sync()
auth.get('/', (req, res) => {
    res.send(`<div>hello world  
        <a href="/users">users</a>
        <a href="/login">login</a>
        </div>`)
})

app.use('/', auth)
app.use('/', coll)
app.use('/', users)

app.listen(PORT, (req,res) => {
    console.log(`Server running at http://localhost:${PORT}`)
})




