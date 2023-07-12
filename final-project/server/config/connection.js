// Initialize Mongoose connection
const mongoose = require('mongoose');

//connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/final-project',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
