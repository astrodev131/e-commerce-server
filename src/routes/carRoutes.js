const express = require("express");
const { addCar } = require("../controllers/carController");
const router = express.Router();

// Register route

// Login route
router.post("/add", addCar);

module.exports = router;
