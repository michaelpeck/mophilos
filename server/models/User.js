const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ProfileSchema = require('./Profile');

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: [ProfileSchema],
  dateJoined: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
