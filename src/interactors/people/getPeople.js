const peopleService = require('../../services/people');
const utils = require('../../utils');

const getPeople = async (sortBy, order) => {
  const people = await peopleService.getPeople();

  return utils.sortPeopleBy(people, sortBy, order);
};

module.exports = getPeople;
