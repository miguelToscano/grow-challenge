const DEFAULT_STATUS_CODE_ERROR = 500;

// eslint-disable-next-line no-unused-vars
const handleError = (error, req, res, next) => res.status(error.statusCode).send({ message: error.message, internalCode: error.statusCode || DEFAULT_STATUS_CODE_ERROR });

module.exports = handleError;
