const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// router.get('/login', userController.showLogin);
router.post('/login', userController.login)
// router.get('/cadastrar', userController.showCadastrar);
router.post('/signup', userController.store)
// router.get('/esqueciMinhaSenha', userController.esqueciMinhaSenha);
router.get('/logout', userController.logout)
router.get('/user', userController.userPanel)
router.get('/orderdetails/:id', userController.orderDetail)

module.exports = router
