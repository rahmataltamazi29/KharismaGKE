'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama : rahmat Nim : 51018018 Jurusan : SI\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
