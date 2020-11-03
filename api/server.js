const express = require('express')
const helmet = require('helmet')
const db = require('../data/connection.js')
const carsRouter = require('./carsRouter.js')
const server = express()

server.use(express.json())
server.use(helmet())

server.use('/api/cars', carsRouter)

// server.get('/api/cars', (req, res)=>{
//     db('cars')
//     .then(cars => {
//         res.status(200).json(cars)
//     })
//     .catch(error => {
//         res.status(500).json({message: error.message })
//     })
// })

// server.get('/api/cars/:id', (req, res) => {
//     db('cars').where({id:id})
//     .then(car => {
//         res.status(200).json(car)
//     })
//     .catch(error => {
//         res.status(500).json({message: error.message })
//     })
// })


// server.post('/api/cars', (req, res) => {
//     db('cars').insert(req.body)
//     .then(ids => {
//         console.log("ids", ids)
//         db('cars').where({id: ids[0] })
//         })
//         .then(newCar => {
//             res.status(201).json(newCar)
//         })
//     .catch(error => {
//         res.status(500).json({ message: error.message })
//     })
// })



module.exports = server