const peopleService = require('../../services/people');
const utils = require('../../utils');

const getPeople = async (sortBy) => {
  const people = await peopleService.getPeople();

  return utils.sortPeopleBy(people, sortBy);
};

module.exports = getPeople;
