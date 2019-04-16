const Cnes = require('./cnes')

Cnes.methods(['get','post','put','delete'])
Cnes.updateOptions({new: true, runValidators: true})

Cnes.route('count', function(req, res, next){
    Cnes.count(function(error, value){
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = Cnes