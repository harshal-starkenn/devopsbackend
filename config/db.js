const mongoose = require("mongoose");

require("dotenv").config();

const db = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.Database}`
    );
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.log("Failed to connect to Database");
    console.log(err);
  }
};

module.exports = { db };
