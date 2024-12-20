const express = require("express");
const { bookNow } = require("../controllers/carController");
const router = express.Router();

// Register route

// Login route
router.post("/", bookNow);
module.exports = router;
