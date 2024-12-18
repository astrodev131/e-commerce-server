const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    price: { type: Number, required: true},
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bike", bikeSchema);
