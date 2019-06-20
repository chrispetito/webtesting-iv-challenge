const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send('Web Testing IV Challenge')
})

module.exports = server;