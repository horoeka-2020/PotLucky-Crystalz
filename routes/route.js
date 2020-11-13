const express = require('express')

const router = express.Router()

const data = require('../data/recipes')

router.get('/recipes/:id', (req, res) => {
  req.then((recipes) => {
      return res.status(200).json(recipes)
    })
    .catch(err => {
      res.status(500).send('DB ERROR' + err)
    })
})

module.exports = router