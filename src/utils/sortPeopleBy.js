const _ = require('lodash');

const validSortParams = ['name', 'height', 'mass'];

const sortByStringParam = (people, param) => {

  people.results = _.sortBy(people.results, [param]);

  return people;
};

const sortByNumericParam = (people, param) => {

  people.results.forEach(result => {

    result[param].replace(/,/g, '');
  });

  people.results = _.sortBy(people.results, [param]);

  return people;
};

const sortByParamMapper = {
  name: sortByStringParam,
  height: sortByNumericParam,
  mass: sortByNumericParam,
};

// eslint-disable-next-line max-len
const sortPeopleBy = (people, param) => (param && validSortParams.includes(param) && Object.keys(sortByParamMapper).includes(param) ? sortByParamMapper[param](people, param) : people);

module.exports = sortPeopleBy;
