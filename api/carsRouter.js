const express = require('express')
const router = express.Router()
const db = require('../data/connection.js')

router.get('/', (req, res)=>{
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        res.status(500).json({message: error.message })
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    db('cars').where({id}).first()
    .then(car => {
        res.status(200).json(car)
    })
    .catch(error => {
        res.status(500).json({message: error.message })
    })
})

router.post('/', (req, res) => {
    db('cars').insert(req.body)
    .then(ids => {
        console.log("ids", ids)
        db('cars').where({id: ids[0] })
        .then(newCar => {
            res.status(201).json(newCar)
        })
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const updatedCar = req.body
    db('cars').where({id:id}).update(updatedCar)
    .then(car => {
        if (car){
            res.status(200).json(car)
        } else {
            res.status(404).json({message: "cannot find car with that id"})
        }
    })
    .catch(error =>{
        res.status(500).json({message: error.message })
    })
})

module.exports = router