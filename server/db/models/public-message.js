const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicMessageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PublicMessage', publicMessageSchema);
