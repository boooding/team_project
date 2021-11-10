const express = require("express")
const { signup, signin, signout } = require("../controllers/auth")

const router = express.Router()

// 注册
router.post("/signup", signup)

// 登录
router.post("/signin", signin)
// 退出
router.get("/signout", signout)

module.exports = router
