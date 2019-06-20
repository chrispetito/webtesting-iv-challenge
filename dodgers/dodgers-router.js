const express = require('express')
const db = require('./dodgers-model')

const router = express.Router()

router.get('/', (req, res) => {
    db.getAll().then(players => {
        res.status(200).json(players)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    db.insert(req.body).then(() => {
        res.status(201).json({message: 'successfully added'})
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;