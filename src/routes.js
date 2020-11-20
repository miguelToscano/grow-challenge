const healthController = require('./controllers/health');
const peopleController = require('./controllers/people');
const planetsController = require('./controllers/planets');
const schemas = require('./schemas');
const { validateSchemaAndFail } = require('./middlewares');

const bind = (app) => {
  app.get('/health', healthController.getHealth);

  app.get('/people', validateSchemaAndFail(schemas.getPeopleSchema), peopleController.getPeople);

  app.get('/planets', planetsController.getPlanets);
};

module.exports = {
  bind,
};
