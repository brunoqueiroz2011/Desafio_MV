const _ = require('lodash')
const Cnes = require('../../models/cnes')

function getFirstDocs(req, res){            
    limit = parseInt(req.params.limit)        
    Cnes.find(        
    function(error, result){                
           if(error) {
               res.status(500).json({errors: [error]})
               return;
           }
           res.json({"result":result})
    }
    ).skip(limit).limit(10)    
}


function getCountTypeManagement(req, res){    
    Cnes.aggregate([{$group: {_id: "$tp_gestao", count:{$sum:1}}}]
    ,function(error, result){        
           if(error) {
               res.status(500).json({errors: [error]})
               return;
           }
           res.json(result)
        }
    )
}

function getCountStates(req, res){    
    Cnes.aggregate([{$group: {_id: "$uf", count:{$sum:1}}}]
    ,function(error, result){        
           if(error) {
               res.status(500).json({errors: [error]})
               return;
            }
            res.json(result)
        }
    )
}

module.exports = {getFirstDocs, getCountTypeManagement, getCountStates}