const request = require('axios');
const config = require('config');
const _ = require('lodash');
const utils = require('../../utils');

const GET = 'get';

const SWAPI_PAGE_SIZE = 10;

const getPlanets = async () => {
  try {
    const options = {
      method: GET,
      url: config.get('swapi.getPlanets'),
    };

    const response = await request(options);

    const { count } = response.data;

    const requests = [];

    for (let i = 2; i < count / SWAPI_PAGE_SIZE + 1; i += 1) {
      options.params = { page: i };

      requests.push(request(options));
    }

    const responses = await Promise.all(requests);

    responses.unshift(response);

    return _.flatten(responses.map((r) => r.data.results));
  } catch (error) {
    throw utils.createError(502, `${config.get('swapi.getPlanets')} request failed.`);
  }
};

module.exports = getPlanets;
