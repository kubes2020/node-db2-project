const express = require('express')
const helmet = require('helmet')

const server = express()

server.use(express.json())
server.use(helmet())

server.get('/api/cars', (req, res)=>{
    res.send('This endpoint is working!!!')
})



module.exports = server