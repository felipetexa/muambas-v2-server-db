const express = require('express')
const router = express.Router()

const apiController = require('../controllers/apiController')

router.get('/headsets', apiController.getAllHeadset)
router.get('/keyboards', apiController.getAllKeyboards)
router.get('/notebooks', apiController.getAllNotebooks)
router.get('/telephones', apiController.getAllTelephone)
router.get('/videogames', apiController.getAllVideoGames)
router.get('/products', apiController.getProducts)

module.exports = router
