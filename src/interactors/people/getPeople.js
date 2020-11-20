const peopleService = require('../../services/people');
const utils = require('../../utils');

const getPeople = async (sortBy) => {

  const people = await peopleService.getPeople();

  utils.sortPeopleBy(people, sortBy);

  return people;
};

module.exports = getPeople;
