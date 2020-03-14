const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Schema
const InterestSchema = new Schema({
  math: Number,
  physics: Number,
  biology: Number,
  chemistry: Number,
  reading: Number,
  writing: Number,
  language: Number,
  computerScience: Number,
  

});

module.exports = InterestSchema
