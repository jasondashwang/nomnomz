const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  fullName: {type: String, required: true},
  position: {type: String}
});

module.exports = mongoose.model('user', userSchema);
