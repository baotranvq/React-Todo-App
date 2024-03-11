const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    mongoose.connect('mongodb://localhost:27017/todo-app')
    console.log('Connected successfully to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; 
  }
};

module.exports = connectToMongoDB;