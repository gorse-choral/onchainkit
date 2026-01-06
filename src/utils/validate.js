// src/utils/validate.js

/**
 * Validates that the required fields are present in the object.
 * Returns an array of missing fields if any, otherwise an empty array.
 * 
 * @param {Object} obj - The object to check.
 * @param {Array<string>} requiredFields - The list of required field names.
 * @returns {Array<string>} - Array of missing fields.
 */
function validateRequiredFields(obj, requiredFields) {
  const missingFields = requiredFields.filter(field => !(field in obj));
  return missingFields;
}

module.exports = validateRequiredFields;
