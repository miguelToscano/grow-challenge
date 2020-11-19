const healthController = require('./controllers/health');

const bind = (app) => {
  app.get('/health', healthController.getHealth);
};

module.exports = {
  bind,
};
