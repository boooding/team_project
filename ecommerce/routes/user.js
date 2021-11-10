const express = require("express")
const {
  userById,
  read,
  update
} = require("../controllers/user")
const { requireSignin, isAuth } = require("../controllers/auth")

const router = express.Router()

// 根据用户id获取用户信息
router.get("/user/:userId", [requireSignin, isAuth], read)
// 更新用户信息 (昵称和密码)
router.put("/user/:userId", [requireSignin, isAuth], update)


router.param("userId", userById)

module.exports = router
