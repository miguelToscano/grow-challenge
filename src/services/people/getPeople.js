const request = require('axios');
const config = require('config');

const GET = 'get';

const getPeople = (page) => {
  const options = {
    method: GET,
    params: { page },
    url: config.get('swapi.people'),
  };
  return request(options).then(response => response.data);
};

module.exports = getPeople;
