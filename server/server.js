var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var sports = require('./db/sportsDb')
var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/sports', sports)
server.use('/api/description', require('./routes/routes'))

module.exports = function(db) {
  server.set('db', db)
  return server
}
