const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EducationSchema = new Schema({
  levelComplete: String,
  yearsSinceComplete: Number,
  currentStudent: Boolean,
  currentLevel: String,
  currentLevelStatus: String,
  specialtyOne: String,
  specialtyTwo: String,
  specialtyThree: String,
  likeSchool: Number,
  studentType: Number
});

module.exports = EducationSchema
