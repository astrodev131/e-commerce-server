const Book = require("../models/bookModel");

const bookNow = async (req, res) => {
  const {
    sort,
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
      sort,
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
  bookNow,
};
