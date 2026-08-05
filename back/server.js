const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Skill Exchange API is running...");
});

const userRoutes = require("./routes/userRoutes");
const skillRoutes = require("./routes/skillRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const exchangeRoutes = require("./routes/exchangeRoutes");

app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/exchanges", exchangeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});