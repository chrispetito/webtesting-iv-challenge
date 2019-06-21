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

router.delete('/:id', (req, res) => {
    db.remove(req.params.id).then(() => {
        res.status(200).json({ message: 'removed succesfully'})
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    db.findById(req.params.id).then(player => {
        res.status(200).json(player)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;