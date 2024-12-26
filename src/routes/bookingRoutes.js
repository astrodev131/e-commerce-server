const express = require("express");
const { bookNow, getBookData } = require("../controllers/bookingController");
const router = express.Router();

// Register route

// Login route
router.post("/booking", bookNow);
router.post("/getdata", getBookData);
module.exports = router;
