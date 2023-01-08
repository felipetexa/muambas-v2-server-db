// API CRIADA PARA CONSUMO DO CHART
const { Product } = require('../models')

const apiController = {
  getAllHeadset: async (req, res) => {
    const headsets = await Product.count({ where: { categories_id: 1 } })
    return res.json(['headsets', headsets])
  },
  getAllKeyboards: async (req, res) => {
    const keyboards = await Product.count({ where: { categories_id: 2 } })
    return res.json(['keyboards', keyboards])
  },
  getAllNotebooks: async (req, res) => {
    const notebooks = await Product.count({ where: { categories_id: 3 } })
    return res.json(['notebookes', notebooks])
  },
  getAllTelephone: async (req, res) => {
    const telephones = await Product.count({ where: { categories_id: 4 } })
    return res.json(['telephones', telephones])
  },
  getAllVideoGames: async (req, res) => {
    const videoGames = await Product.count({ where: { categories_id: 5 } })
    return res.json(['videoGames', videoGames])
  },

  getProducts: async (req, res) => {
    const products = await Product.findAll()
    const array = products.map(product => {
      return [`sku ${product.id}`]
    })
    return res.status(200).json(array)
  }
}

module.exports = apiController
