const express = require('express')
const helmet = require('helmet')
const db = require('../data/connection.js')

const server = express()

server.use(express.json())
server.use(helmet())

server.get('/api/cars', (req, res)=>{
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        res.status(500).json({message: error.message })
    })
    // res.send('This endpoint is working!!!')
})



module.exports = server