const express = require("express");
const {
  addCar,
  getCar,
  getCarById,
  bookNow,
} = require("../controllers/carController");
const router = express.Router();

// Register route

// Login route
router.post("/add", addCar);
router.get("/getdata", getCar);
router.get("/getdatabyid/:id", getCarById);
router.post("/booknow", bookNow);
module.exports = router;
