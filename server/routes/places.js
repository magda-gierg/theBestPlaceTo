var express = require('express')
var router = express.Router()

var sports = require('../db/places')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  sports.getPlaces(db)
  .then(places => {
    res.json(places)
  })
  .catch(err => {
        res.status(500).send({message: err.message})
      })
})


module.exports = router
