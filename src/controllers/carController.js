const Car = require("../models/carModel");
const Book = require("../models/bookModel");
// @route POST /auth/register
// @desc Register a new user
const addCar = async (req, res) => {
  const { name, price, img } = req.body;

  try {
    await Car.create({
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

const getCar = async (req, res) => {
  const carData = await Car.find();
  return res.status(201).json(carData);
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the `id` from the route parameters
    const carData = await Car.findById(id); // Use `findById` to find the document by `_id`

    if (!carData) {
      return res.status(404).json({ message: "Car not found" });
    }

    return res.status(200).json(carData); // Return the car data
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving car", error: error.message });
  }
};

const bookNow = async (req, res) => {
  const {
    username,
    useremail,
    name,
    pickuplocation,
    date,
    returndate,
    payment,
    status,
  } = req.body;

  console.log("sdfsdfsdf");

  try {
    await Book.create({
      username,
      useremail,
      name,
      pickuplocation,
      date,
      returndate,
      payment,
      status,
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
  getCar,
  getCarById,
  bookNow,
};
