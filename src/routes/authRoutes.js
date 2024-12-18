const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidator");
const validateRequest = require("../middlewares/validationMiddleware");

const router = express.Router();

// Register route
router.post("/auth/register", registerValidation, validateRequest, registerUser);

// Login route
router.post("/auth/login", loginValidation, validateRequest, loginUser);

module.exports = router;
