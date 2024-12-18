const express = require("express");
const { addBike } = require("../controllers/bikeController");
const router = express.Router();

// Register route

// Login route
router.post("/add", addBike);

module.exports = router;
