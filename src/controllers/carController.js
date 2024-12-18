const Car = require("../models/carModel");

// @route POST /auth/register
// @desc Register a new user
const addCar = async (req, res) => {
  const { name, price, img } = req.body;

  try {
    const newCar = await Car.create({
      name,
      price,
      img,
    });
    return res.status(201).json({
      message: "success",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error", error: error.message });
  }
};

// Export controllers
module.exports = {
  addCar,
};