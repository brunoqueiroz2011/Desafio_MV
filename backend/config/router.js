const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/api',router)

    const cnesService = require('../api/cnes/cnesService')
    cnesService.register(router, '/cnes')

    const cnesSummaryService = require('../api/cnesSummary/cnesSummaryService')
    router.route('/cnesgrouptbgestao').get(cnesSummaryService.getCountTbGestao)
    router.route('/cnesgroupUF').get(cnesSummaryService.getCountUF)
    router.route('/cnesfirtsdocs/:limit').get(cnesSummaryService.getFirstDocs)
}