const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {

  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email checks
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
