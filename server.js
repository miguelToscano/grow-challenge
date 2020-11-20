const config = require('config');
const app = require('./app');

const port = config.get('api.port') || 8080;

Promise.resolve()
  .then(() => {
    app.listen(port);
    console.log(`Listening on port: ${port}`);
  })
  .catch((error) => {
    process.exit(1);
  });
