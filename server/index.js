const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors())
app.get('/', (req,res) => {
    res.send('hello world')
})

app.get('/', (req,res) => {
    res.send('its working')
})

app.listen(3001)