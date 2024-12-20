const Bike = require("../models/bikeModel");

// @route POST /auth/register
// @desc Register a new user
const addBike = async (req, res) => {
  const { name, price, img } = req.body;

  try {
    await Bike.create({
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
const getBike = async (req, res) => {
  const bikeData = await Bike.find();
  return res.status(201).json(bikeData);
};

const getBikeById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the `id` from the route parameters
    const bikeData = await Bike.findById(id); // Use `findById` to find the document by `_id`

    if (!bikeData) {
      return res.status(404).json({ message: "bike not found" });
    }

    return res.status(200).json(bikeData); // Return the bike data
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving bike", error: error.message });
  }
};
// Export controllers
module.exports = {
  addBike,
  getBike,
  getBikeById,
};
