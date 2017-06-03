const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
  fullName: {type: String},
  position: {type: String},
  phone: {type: String}, // Check type better
  restaurant: { // Check again
    type: String,
    required: true
  }


});

module.exports = mongoose.model('user', contactSchema);
