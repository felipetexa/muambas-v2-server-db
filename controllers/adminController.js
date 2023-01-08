const { Product, Category } = require('../models')
const storage = require('../middlewares/storage')
const fs = require('fs')

const adminController = {
  getAdminPanel: async (req, res) => {
    const products = await Product.findAll()
    return res.status(200).json(products)
  },
  getProduct: async (req, res) => {
    const { id } = req.params
    const product = await Product.findOne({ where: { id } })

    return res.status(200).json({ products: product })
  },
  addProduct: async (req, res) => {
    const categories = await Category.findAll()

    return res.status(200).json(categories)
  },
  storeProduct: async (req, res) => {
    const { name, image, price, category, active, description } = req.body
    if (req.file) {
      await Product.create({
        name,
        price: parseFloat(price),
        categories_id: category,
        active,
        description,
        image: req.file.filename
      })
    } else {
      await Product.create({
        name,
        price: parseFloat(price),
        categories_id: category,
        active,
        description,
        image
      })
    }

    return res
      .status(201)
      .json({ name, image, price, category, active, description })
  },

  editProduct: async (req, res) => {
    const { id } = req.params
    const categories = await Category.findAll()
    const product = await Product.findOne({ where: { id } })
    return res.status(200).json(categories, product)
  },

  updateProduct: async (req, res) => {
    const { id } = req.params
    const { name, image, price, category, active, description } = req.body
    if (req.file) {
      await Product.update(
        {
          name,
          image: req.file.filename,
          price: parseFloat(price),
          category,
          active: active ? 'on' : 'off',
          description
        },
        { where: { id } }
      )
    } else {
      await Product.update(
        {
          name,
          image: req.file.filename,
          price: parseFloat(price),
          category,
          active: active ? 'on' : 'off',
          description
        },
        { where: { id } }
      )
    }
    return res
      .status(201)
      .json({ name, image, price, category, active, description })
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params
    const product = await Product.findOne({ where: { id } })
    return res.status(200).json({ products: product })
  },

  destroyProduct: async (req, res) => {
    const { id } = req.params
    await Product.destroy({ where: { id } })
    try {
      fs.unlinkSync('./public' + product.image)
    } catch (err) {
      console.error(err)
    }
    return res.redirect('/adm/paineladmin')
  }
}

module.exports = adminController
