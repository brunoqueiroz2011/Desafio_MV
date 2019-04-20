const express = require('express')

module.exports = function(server){    
    //API Routes
    const router = express.Router()    
    server.use('/api',router)
    console.log(router)

    const cnesService = require('../Controllers/cnes/cnesService')
    cnesService.register(router,'/cnes')

    const cnesSummaryService = require('../Controllers/cnesSummary/cnesSummaryService')
    router.route('/cnesgrouptbgestao').get(cnesSummaryService.getCountTypeManagement)
    router.route('/cnesgroupUF').get(cnesSummaryService.getCountStates)
    router.route('/cnesfirtsdocs/:limit').get(cnesSummaryService.getFirstDocs)
}