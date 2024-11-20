const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/gymDB")
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to database:', error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
