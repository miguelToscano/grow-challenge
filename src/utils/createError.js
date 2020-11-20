const createError = (statusCode, message) => ({
  statusCode,
  message,
});

module.exports = createError;
