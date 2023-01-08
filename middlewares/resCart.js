const resCart = (req, res, next) => {
  let { cart } = req.session

  if (cart > 0) {
    res.locals.cart = cart
  } else {
    res.locals.cart = cart
  }
  next()
}

module.exports = resCart
