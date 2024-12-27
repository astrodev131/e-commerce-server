const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    sort: { type: String, required: true },
    username: { type: String, required: true },
    useremail: { type: String, required: true },
    name: { type: String, required: true },
    pickuplocation: { type: String, required: true },
    date: { type: String, required: true },
    returndate: { type: String, required: true },
    payment: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
