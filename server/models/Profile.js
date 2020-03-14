const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var DemographicSchema = require('./Demographic');
var EducationSchema = require('./Education');
var EmploymentSchema = require('./Employment');
var FamilySchema = require('./Family');
var InterestSchema = require('./Interest')
var BackgroundSchema = require('./Background');
var GoalsSchema = require('./Goals');

// Create Schema
const ProfileSchema = new Schema({
  demographic: [DemographicSchema],
  education: [EducationSchema],
  employment: [EmploymentSchema],
  family: [FamilySchema],
  interests: [InterestSchema],
  background: [BackgroundSchema],
  goals: [GoalsSchema]
});

module.exports = ProfileSchema
