const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/api',router)

    const cnesService = require('../controllers/cnes/cnesService')
    cnesService.register(router, '../../models/cnes')

    const cnesSummaryService = require('../controllers/cnesSummary/cnesSummaryService')
    router.route('/cnesgrouptbgestao').get(cnesSummaryService.getCountTypeManagement)
    router.route('/cnesgroupUF').get(cnesSummaryService.getCountStates)
    router.route('/cnesfirtsdocs/:limit').get(cnesSummaryService.getFirstDocs)
}