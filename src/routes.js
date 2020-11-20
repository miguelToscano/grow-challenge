const healthController = require('./controllers/health');
const peopleController = require('./controllers/people');

const bind = (app) => {
  app.get('/health', healthController.getHealth);

  app.get('/people', peopleController.getPeople);
};

module.exports = {
  bind,
};
