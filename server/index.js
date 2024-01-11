const express = require('express')
const cors = require('cors');
const path = require('path');
const auth = require("./routes/auth");
const bodyParser = require('body-parser');
const db = require("./models");
const {User} = require("./models");
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const PORT = process.env.PORT || 4000;


//
//
//
const app = express()
app.use(cors())
app.use(bodyParser.json());

app.use('/', auth)
app.listen(PORT, (req,res) => {
    console.log(`Server running at http://localhost:${PORT}`)
})




