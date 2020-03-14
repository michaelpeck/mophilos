const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EmploymentSchema = new Schema({
  status: String,
  type: String,
  industry: String,
  profession: String,
  incomeType: String,
  salary: Number  
});

module.exports = EmploymentSchema
