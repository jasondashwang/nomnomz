const mongoose = require('mongoose');
const path = require('path');
const chalk = require('chalk');
const ENV_VARIABLES = require(path.join(__dirname, '../env'));
const DATABASE_URI = ENV_VARIABLES.DATABASE_URI;
const DATABASE_USER = ENV_VARIABLES.DATABASE_USER;
const DATABASE_PASSWORD = ENV_VARIABLES.DATABASE_PASSWORD;

const options = {
  db: { native_parser: true},
  user: DATABASE_USER,
  pass: DATABASE_PASSWORD
};

mongoose.Promise = require('bluebird');
console.log(chalk.yellow('Opening connection to MongoDB', DATABASE_URI));
module.exports = mongoose.connect(DATABASE_URI, options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
