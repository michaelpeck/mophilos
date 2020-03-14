const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FamilyMemberSchema = new Schema({
  relation: String,
  age: Number,
  dynamic: String
});

module.exports = FamilyMemberSchema
