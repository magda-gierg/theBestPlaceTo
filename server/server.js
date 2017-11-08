var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var sports = require('./routes/routes')

var server = express()
server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

// server.use('/api/sports', sports)
// server.use('/api/places', places)

module.exports = function(db) {
  server.set('db', db)
  return server
}
