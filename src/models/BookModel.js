const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    pickuplocation: { type: String, required: true },
    date: { type: String, required: true },
    returndate: { type: String, required: true },
    payment: { type: Number, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
    