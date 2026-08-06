const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/SkillExchangeDB');

    console.log("MongoDB Connected to database:", mongoose.connection.name);
    console.log("Host:", mongoose.connection.host);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;