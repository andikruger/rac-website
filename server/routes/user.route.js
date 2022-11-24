const express = require("express");
const router = express.Router();

const {
  loginController,
  registerController,
  forgotPasswordController,
  resetPasswordController,
} = require("../controllers/user.controller");

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgotpassword", forgotPasswordController);
router.put("/passwordreset/:resetToken", resetPasswordController);

module.exports = router;
