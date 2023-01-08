const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cartController')
const verifyLogin = require('../middlewares/verifyLogin')

router.use(verifyLogin)
router.get('/cart', cartController.showCart)
router.post('/cart/add', cartController.addCart)
router.delete('/cart/:id/remove', cartController.removeCart)
router.post('/cart/finish-order', cartController.finishOrder)
router.get('/order-finished/:id', cartController.orderFinished)

module.exports = router
