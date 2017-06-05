const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  fullName: {type: String, required: true},
  position: {type: String},
  pwd: {type: String, required: true},
  roles: [{ role: 'userAdminAnyDatabase', db: 'admin'}]
});

module.exports = mongoose.model('User', userSchema);
