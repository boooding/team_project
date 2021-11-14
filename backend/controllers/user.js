const User = require("../models/user")

const userById = (req, res, next, id) => {
  User.findById(id).exec((error, user) => {
    if (error || !user) return res.status(400).json({ error: "用户没找到" })
    req.profile = user
    next()
  })
}

const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

const update = (req, res) => {
  const { name, password } = req.body

  User.findOne({ _id: req.profile._id }, (err, user) => {
    if (err || !user) return res.status(400).json({ error: "用户不存在" })
    if (!name) {
      return res.status(400).json({ error: "请传入昵称" })
    } else {
      user.name = name
    }

    if (password) {
      if (password.length < 6) {
        return res.status(400).json({ error: "密码最少6位" })
      } else {
        user.password = password
      }
    }

    user.save((err, updatedUser) => {
      if (err) return res.status(400).json({ error: "用户信息更新失败" })
      updatedUser.hashed_password = undefined
      updatedUser.salt = undefined
      res.json(updatedUser)
    })
  })
}



module.exports = {
  userById,
  read,
  update
}
