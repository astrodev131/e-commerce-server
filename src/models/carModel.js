const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    price: { type: String, required: true},
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);
