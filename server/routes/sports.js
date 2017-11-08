var express = require('express')
var router = express.Router()

var sports = require('../db/sports')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  sports.getSports(db)
  .then(sports => {
    res.json(sports)
  })
  .catch(err => {
        res.status(500).send({message: err.message})
      })
})


module.exports = router
