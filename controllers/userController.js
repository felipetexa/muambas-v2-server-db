const { User } = require('../models')
const bcrypt = require('bcrypt')
const { Order } = require('../models')
// const { response } = require('express')

const UserController = {
  // showLogin: (req, res) => {
  //   return res.render('home/login')
  // },

  // showCadastrar: (req, res) => {
  //   res.render('home/cadastro')
  // },

  store: async (req, res) => {
    const { name, email, password, confirmPassword, telephone, avatar } =
      req.body
    const hash = bcrypt.hashSync(password, 10)
    const verifyIfRegistered = await User.findOne({ where: { email } })

    if (verifyIfRegistered) {
      return res.status(404).json({ error: 'User already registered' })
    }

    if (password != confirmPassword) {
      return res.status(404).json({ error: "passwords don't match" })
    }

    const user = {
      name,
      email,
      password: hash,
      telephone,
      avatar
    }

    await User.create(user)

    return res.status(201).json(user)
  },

  login: async (req, res) => {
    const { email, password } = req.body
    const user = await user.findOne({ where: { email } })

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(404).json({
        error: "Email or password are incorrect or don't exist"
      })
    }

    req.session.user = user
    return res.status(200).json(user)
  },

  logout: (req, res) => {
    req.session.destroy()

    return res.status(200).json(req.session.destroy())
  },
  userPanel: async (req, res) => {
    const { user, cart } = req.session
    const orders = await Order.findAll({
      where: { user_id: user.id },
      include: 'products'
    })
    return res.status(200).json({
      user,
      orders: orders,
      cart
    })
  },
  orderDetail: async (req, res) => {
    const { user } = req.session
    const { id } = req.params
    const order = await Order.findOne({
      where: { id, user_id: user.id },
      include: 'products'
    })
    return res.status(200).json({ user, order: order })
  }
}

module.exports = UserController
