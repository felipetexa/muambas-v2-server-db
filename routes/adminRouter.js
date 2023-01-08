const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')
const verifyLogin = require('../middlewares/verifyLogin')
const verifyAdmin = require('../middlewares/verifyAdmin')
const resCart = require('../middlewares/resCart')
const storage = require('../middlewares/storage')
const upload = storage('images', '/products')

router.use(verifyLogin)
router.use(verifyAdmin)
router.use(resCart)
router.get('/adm/admin-panel', adminController.getAdminPanel)
router.get('/adm/add-product', adminController.addProduct)
router.get('/adm/product/details/:id', adminController.getProduct)
router.post('/adm/add-product', upload, adminController.storeProduct)
router.get('/adm/:id/edit-product', adminController.editProduct)
router.put('/adm/edit-product/:id', upload, adminController.updateProduct)
router.get('/adm/delete-product/:id', adminController.deleteProduct)
router.delete('/adm/delete-product/:id', adminController.destroyProduct)

module.exports = router
