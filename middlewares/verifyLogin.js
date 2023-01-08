const verifyLogin = (req, res, next) => {
  if (!req.session.user) {
    return res.status(404).json({ error: 'User not logged in' })
  }

  res.locals.user = req.session.user
  return res.status(200).json(req.session.user)
  return next()
}

module.exports = verifyLogin
