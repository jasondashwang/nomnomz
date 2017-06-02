const mongoose = require('mongoose');
const path = require('path');
const chalk = require('chalk');
const DATABASE_URI = require(path.join(__dirname, '../env')).DATABASE_URI;

mongoose.Promise = require('bluebird');
console.log(chalk.yellow('Opening connection to MongoDB'));
module.exports = mongoose.connect(DATABASE_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
