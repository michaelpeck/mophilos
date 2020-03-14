const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DemographicSchema = new Schema({
  age: Number,
  country: String,
  State: String,
  sex: String,
  gender: String,
  bornRace: String,
  identifyRace: String,
  bornEthnicity: String,
  identifyEthnicity: String
});

module.exports = DemographicSchema
