const userSignupValidator = (req, res, next) => {
  req.check("username", "name miss").notEmpty()
  req.check("password", "password miss").notEmpty()
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("length of password should greater than 6")
    // .matches(/\d/)
    // .withMessage("")
  const errors = req.validationErrors()
  if (errors) {
    const firstError = errors.map(error => error.msg)[0]
    return res.status(400).json({ error: firstError })
  }
  next()
}

module.exports = { userSignupValidator }
