const { connect, connection } = require('mongoose');
const MongoClient = require("mongodb").MongoClient

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/social-api-network';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;