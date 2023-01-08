const verifyAdmin = (req, res, next) => {
  const { user } = req.session
  if (user.is_admin == 1) {
    return next()
  }

  return res.status(200).json(user)
}

module.exports = verifyAdmin
