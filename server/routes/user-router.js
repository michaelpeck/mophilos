const express = require("express");
const router = express.Router();

const UserCtrl = require('../controllers/user-controller')

// @access Public
router.post("/register", UserCtrl.registerUser);
router.post("/login", UserCtrl.loginUser);

module.exports = router;
