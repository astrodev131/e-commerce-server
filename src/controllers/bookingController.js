const Book = require("../models/bookModel");

const getBookData = async (req, res) => {
  const useremail = req.body.useremail;
  console.log(useremail);
  const bookData = await Book.find({ useremail });
  return res.status(201).json(bookData);
};

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
  getBookData,
};
