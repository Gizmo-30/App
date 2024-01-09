const express = require('express')
const cors = require('cors');
const path = require('path');
const router = require("./routes/router");
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

app.use('/', router)
try {
    db.sequelize.authenticate();
    db.sequelize.sync();
    console.log('yes')
} catch (e) {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxx',e)
}
app.listen(PORT, (req,res) => {
    console.log(`Server running at http://localhost:${PORT}`)
})




