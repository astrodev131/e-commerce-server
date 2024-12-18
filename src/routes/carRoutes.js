const express = require("express");
const { addCar, getCar } = require("../controllers/carController");
const router = express.Router();

// Register route

// Login route
router.post("/add", addCar);
router.get("/getdata", getCar);

module.exports = router;
