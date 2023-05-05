'use strict'

const express = require('express')

const PORT = 8000
const HOST = '26.169.226.148'

const app = express()
app.get('/', (req, res) => {
    res.send('Khosy Hanno Candra Utama\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)