const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");
const bikeRoutes = require("./routes/bikeRoutes");
const { PORT } = require("./config/env");
const cors = require("cors");
const bookNow = require("./routes/bookingRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
// Routes
app.use("/auth", authRoutes);
app.use("/car", carRoutes);
app.use("/bike", bikeRoutes);
app.use("/book", bookNow);

// Connect to Database and Start Server
connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
  );
});
