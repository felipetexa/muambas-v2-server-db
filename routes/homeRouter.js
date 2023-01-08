const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

router.get('/', homeController.showIndex)
router.post('/', homeController.showIndex)
router.get('/categories/:id', homeController.categories)
router.get('/products', homeController.products)
// router.get('/cadastro', homeController.cadastro)
router.get('/list', homeController.list)
router.get('/products/:id', homeController.showOneProduct)

module.exports = router
