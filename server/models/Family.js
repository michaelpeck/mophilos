const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var FamilyMemberSchema = require('./FamilyMember');

// Create Schema
const FamilySchema = new Schema({
  current: Boolean,
  range: Number,
  parent: Boolean,
  child: Boolean,
  spouse: Boolean,
  guardian: Boolean,
  dependant: Boolean,
  sibling: Boolean,
  householdIncome: Number,
  financialStability: String,
  numberMembers: Number,
  familyDynamic: String,
  members: [FamilyMemberSchema]
});

module.exports = FamilySchema
