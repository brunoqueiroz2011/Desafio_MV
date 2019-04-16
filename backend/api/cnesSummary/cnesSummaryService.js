const _ = require('lodash')
const Cnes = require('../cnes/cnes')

function getCountTbGestao(req, res){
    //db.cnes.aggregate([{$group: {_id: "$tb_gestao", total: {$sum:1}}}])
    Cnes.aggregate([{$group: {_id: "$tp_gestao", count:{$sum:1}}}]
    ,function(error, result){
        console.log(result)
           if(error) {
               res.status(500).json({errors: [error]})
           }else{               
               res.json(result)
           }
        }
    )
}

function getCountUF(req, res){    
    Cnes.aggregate([{$group: {_id: "$uf", count:{$sum:1}}}]
    ,function(error, result){
        console.log(result)
           if(error) {
               res.status(500).json({errors: [error]})
           }else{               
               res.json(result)
           }
        }
    )
}

module.exports = {getCountTbGestao, getCountUF}