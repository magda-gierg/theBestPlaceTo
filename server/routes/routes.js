var express = require('express')
var router = express.Router()

var sportsDb = require('../db/sportsDb')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  sportsDb.getSports(db)
  .then(sports => {
    res.json(sports)
  })
})
