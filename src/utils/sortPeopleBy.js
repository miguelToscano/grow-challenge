const _ = require('lodash');

const validSortParams = ['name', 'height', 'mass'];

const sortByStringParam = (people, param) => {
  people = _.sortBy(people, [param]);

  return people;
};

const sortByNumericParam = (people, param) => {
  const array = people.map((person) => {
    const object = {
      ...person,
    };

    object[param] = object[param].replace(/,/g, '');
    object[param] = parseFloat(object[param]);

    return object;
  });

  return _.sortBy(array, [param]);
};

const sortByParamMapper = {
  name: sortByStringParam,
  height: sortByNumericParam,
  mass: sortByNumericParam,
};

const sortPeopleBy = (people, param) => (param && validSortParams.includes(param) && Object.keys(sortByParamMapper).includes(param) ? sortByParamMapper[param](people, param) : people);

module.exports = sortPeopleBy;
