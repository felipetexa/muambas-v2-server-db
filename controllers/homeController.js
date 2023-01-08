const { Product } = require('../models')
const { Op } = require('sequelize')

const homeController = {
  showIndex: async (req, res) => {
    let { user, cart } = req.session
    const { search } = req.body
    if (search && search.length > 0) {
      const products = await Product.findAll({
        where: {
          name: {
            [Op.like]: `%${search}%`
          }
        }
      })
      return res.status(200).json({ products, user, cart })
    }
    const products = await Product.findAll({
      where: {
        active: {
          [Op.eq]: 'on'
        }
      },
      limit: 4,
      offset: 3
    })

    if (user) {
      if (cart > 0) {
        return res.status(200).json({ products, user, cart })
      }
      return res.status(200).json({ products, user, cart })
    }
    return res.status(200).json({ products, user, cart })
  },

  showOneProduct: async (req, res) => {
    let { user, cart } = req.session
    const { id } = req.params

    const product = await Product.findByPk(id)
    if (!product) {
      return res.status(404).json({
        error: 'product not found'
      })
    }
    if (user) {
      if (cart > 0) {
        return res.status(200).json({ product, user, cart })
      }
      return res.status(200).json({ product, user, cart })
    }
    return res.status(200).json({ product, user })
  },

  categories: async (req, res) => {
    const { user } = req.session
    const { cart } = req.session
    const id = req.params.id
    const categories = await Product.findAll({
      where: {
        categories_id: {
          [Op.eq]: id
        }
      }
    })
    return res.status(200).json({ user, cart, categories })
  },

  //   login: (req, res) => {
  //     res.render('home/login')
  //   },

  products: (req, res) => {
    const { user } = req.session

    return res.status(200).json({ user })
  },

  //   cadastro: (req, res) => {
  //     res.render('home/cadastro')
  //   },

  list: async (req, res) => {
    let { user, cart } = req.session
    const { search } = req.body
    console.log(search)
    if (search && search.length > 0) {
      const products = await Product.findAll({
        where: {
          name: {
            [Op.like]: `%${search}%`
          }
        }
      })
      return res.status(200).json({ products, user, cart })
    }
    const products = await Product.findAll()

    if (user) {
      if (cart > 0) {
        return res.status(200).json({ products, user, cart })
      }
      return res.status(200).json({ products, user, cart })
    }
    return res.status(200).json({ products, user, cart })
  }
}

module.exports = homeController
