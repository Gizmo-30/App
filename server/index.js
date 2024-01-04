const express = require('express')
const cors = require('cors');
const app = express()

const path = require('path');
const envFilePath = path.resolve(__dirname, '../.env');
require('dotenv').config({ path: envFilePath });
const PORT = process.env.PORT || 4000;

//
//
//

app.use(cors())
app.get('/', (req,res) => {
    res.send('hello world')
})

app.get('/test', (req,res) => {
    res.send('its working')
})

app.listen(PORT, (req,res) => {
    console.log(`Server running at http://localhost:${PORT}`)
})