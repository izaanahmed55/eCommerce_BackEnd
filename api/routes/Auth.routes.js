const express = require("express")
const {getAuth, loginUser} = require("../../controller/Auth.controller")

const router = express.Router()

router.get("/", getAuth)
router.post("/login", loginUser)

module.exports = router;