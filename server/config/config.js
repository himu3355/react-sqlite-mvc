require('dotenv').config();
module.exports = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || 'development',
  database: {
    filename: './database.db'
  }
};