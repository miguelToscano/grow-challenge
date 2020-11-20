const { checkSchema, validationResult } = require('express-validator');
const utils = require('../utils');

const checkValidationResult = (req, _, next) => {
  const errorsResult = validationResult(req);
  if (!errorsResult.isEmpty()) {
    return next(
      utils.createError(400, ...new Set(errorsResult.array({ onlyFirstError: true }).map((e) => e.msg))),
    );
  }
  return next();
};

const validateSchemaAndFail = (schema) => [checkSchema(schema), checkValidationResult];

module.exports = validateSchemaAndFail;
