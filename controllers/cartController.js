const { Order, OrderProducts } = require('../models')

const cartController = {
  showCart: (req, res) => {
    let { cart } = req.session
    let total = 0

    if (!cart) {
      return res.status(200).json({ cart: [], total })
    }

    cart.forEach(product => {
      total += parseFloat(product.price)
    })
    return res.status(200).json({ cart, total })
  },

  addCart: (req, res) => {
    const { id, name, price, image } = req.body
    const product = { id, name, price, image }

    if (req.session.cart) {
      req.session.cart.push(product)
    } else {
      req.session.cart = [product]
    }
    return res.status(201).json(req.session.cart)
  },
  removeCart: (req, res) => {
    const { id } = req.params
    let { cart } = req.session

    const index = cart.findIndex(product => product.id == id)

    let cartUpdated = cart.splice(index, 1)

    cart = cartUpdated

    if (cart.length <= 0) {
      cart = []
      return res.status(201).json(cartUpdated)
    }
    return res.status(201).json(cartUpdated)
  },
  finishOrder: async (req, res) => {
    const { payment, delivery, total } = req.body
    let { cart } = req.session

    const userId = req.session.user.id
    const order = {
      user_id: userId,
      total,
      payment,
      delivery
    }

    const newOrder = await Order.create(order)

    const orderProducts = cart.map(product => {
      return {
        order_id: newOrder.id,
        product_id: product.id
      }
    })

    await OrderProducts.bulkCreate(orderProducts)
    req.session.cart = []
    return res.status(200).json(newOrder.id)
  },
  orderFinished: async (req, res) => {
    const { id } = req.params
    const order = await Order.findOne({ where: { id }, include: 'products' })
    return res.status(200).json({ order: order })
  }
}

module.exports = cartController
