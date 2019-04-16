const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/api',router)

    const cnesService = require('../api/cnes/cnesService')
    cnesService.register(router, '/cnes')
}