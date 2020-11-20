const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const config = require('config');
const middlewares = require('./src/middlewares');

const routes = require('./src/routes');

const DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10;
const DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
  parameterLimit: config.get('api').parameterLimit || DEFAULT_PARAMETER_LIMIT,
  limit: config.get('api').bodySizeLimit || DEFAULT_BODY_SIZE_LIMIT,
});

const bodyParserUrlencodedConfig = () => ({
  extended: true,
  parameterLimit: config.get('api').parameterLimit || DEFAULT_PARAMETER_LIMIT,
  limit: config.get('api').bodySizeLimit || DEFAULT_BODY_SIZE_LIMIT,
});

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json(bodyParserJsonConfig()));
app.use(bodyParser.urlencoded(bodyParserUrlencodedConfig()));

routes.bind(app);

app.use(middlewares.handleError);

module.exports = app;
