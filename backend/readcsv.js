const fs = require('fs')
const csv = require('fast-csv')

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'

const stream = fs.createReadStream('cnes_ativonone.csv')

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("db_MV")
    //const streamCsv
    csv
    .fromStream(
        stream, 
        {headers: true,
        quote: '"'})
    .on("data", function(data){        
        dbo.collection("cnes").insert(data);
    })
    .on("end", function(){
        db.close();
        console.log("done")
    });
})


