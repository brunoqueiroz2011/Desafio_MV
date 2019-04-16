const restful = require('node-restful')
const mongoose = restful.mongoose

const cnesSchema = new mongoose.Schema({
    co_cnes:{type: Number, require: true},
    co_ibge:{type: String, require: true},
    no_fantasia:{type: String, require: true},
    ds_tipo_unidade:{type: String, require: true},
    tp_gestao:{type: String, require: true},
    no_logradouro:{type: String, require: true},
    nu_endereco:{type: String, require: true},
    no_bairro:{type: String, require: true},
    co_cep:{type: String, require: true},
    uf:{type: String, require: true},
    municipio:{type: String, require: true},
    nu_telefone :{type: String, require: false}   
})

module.exports = restful.model('Cnes', cnesSchema)