const mongoose = require('mongoose')

//Creating User Schema
var userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});


//Export Schema
const user = mongoose.model('user', userSchema);
module.exports = user