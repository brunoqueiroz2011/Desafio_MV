const server = require('./config/server')
require('./config/database')
require('./api/routes/router')(server)