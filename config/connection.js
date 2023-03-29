const { connect, connection } = require('mongoose');

// MongoDB connection string to connect and create database
connect('mongodb://localhost:27017/socialnetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;

