const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
// db.getBlogPosts()
    .then((recipes) => {
      return res.status(200).json(recipes)
    })
    .catch(err => {
      res.status(500).send('DB ERROR' + err)
    })
})

module.exports = router