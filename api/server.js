const express = require('express')

const server = express()

const dodgersRouter = require('../dodgers/dodgers-router')

server.use(express.json())

server.use('/api/dodgers', dodgersRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Example JSON for Web Testing IV Challenge' })
})

module.exports = server;