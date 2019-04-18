const _ = require('lodash')
const Cnes = require('../cnes/cnes')

function getFirstDocs(req, res){            
    limit = parseInt(req.params.limit)        
    Cnes.find(        
    function(error, result){                
           if(error) {
               res.status(500).json({errors: [error]})
           }else{               
               res.json(result)
           }
    }
    ).limit(limit)    
}


function getCountTbGestao(req, res){    
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

module.exports = {getFirstDocs, getCountTbGestao, getCountUF}