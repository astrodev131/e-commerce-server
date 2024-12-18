const express = require("express");
const { addBike, getBike } = require("../controllers/bikeController");
const router = express.Router();

// Register route

// Login route
router.post("/add", addBike);
router.get("/getdata", getBike);

module.exports = router;
