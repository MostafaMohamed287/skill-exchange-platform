const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware


// Test Route
app.get("/", (req, res) => {
  res.send("Skill Exchange API is running...");
});

const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const skillRoutes = require("./routes/skillRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const exchangeRoutes = require("./routes/exchangeRoutes");


app.use(cors());
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/exchanges", exchangeRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});