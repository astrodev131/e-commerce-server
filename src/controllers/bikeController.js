const Bike = require("../models/bikeModel");

// @route POST /auth/register
// @desc Register a new user
const addBike = async (req, res) => {
  const { name, price, img } = req.body;

  try {
    const newBike = await Bike.create({
      name,
      price,
      img,
    });
    return res.status(201).json({
      message: "success bike",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error", error: error.message });
  }
};

// Export controllers
module.exports = {
  addBike,
};
