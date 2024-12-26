const express = require("express");
const {
  addBike,
  getBike,
  getBikeById,
} = require("../controllers/bikeController");
const router = express.Router();

// Register route

// Login route
router.post("/add", addBike);
router.get("/getdata", getBike);
router.get("/getdatabyid/:id", getBikeById);

module.exports = router;
