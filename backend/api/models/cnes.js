const restful = require('node-restful')
const mongoose = restful.mongoose

const cnesSchema = new mongoose.Schema({
    co_cnes:{type: Number, require: [true, "Informe o valor do código do CNES"]},
    co_ibge:{type: String, require: [true, "Informe o valor do código do IBGE"]},
    no_fantasia:{type: String, require: [true, "Informe o valor do nome fantasia"]},
    ds_tipo_unidade:{type: String, require: [true, "Informe o valor do tipo da unidade"]},
    tp_gestao:{type: String, require: [true, "Informe o valor do tipo da gestão"], uppercase: true},
    no_logradouro:{type: String, require: [true, "Informe o valor do nome do logradouro"]},
    nu_endereco:{type: String, require: [true, "Informe o valor do nome do endereço"]},
    no_bairro:{type: String, require: [true, "Informe o valor do nome do bairro"]},
    co_cep:{type: String, require: [true, "Informe o valor do código do CEP"]},
    uf:{type: String, require: [true, "Informe o valor do UF"], uppercase: true},
    municipio:{type: String, require: [true, "Informe o valor do nome do Municipio"]},
    nu_telefone :{type: String, require: false}   
})

module.exports = restful.model('Cnes', cnesSchema)