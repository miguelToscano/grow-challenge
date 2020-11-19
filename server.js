const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const config = require('config');

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

const port = config.get('api.port') || 3000;

app.listen(port);

console.log(`Listening on port: ${port}`);