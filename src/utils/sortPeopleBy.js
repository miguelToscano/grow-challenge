const _ = require('lodash');

const sortByStringParam = (people, param, order = 'asc') => {
  const array = people.map((person) => ({ ...person }));

  return _.orderBy(array, [param], [order]);
};

const sortByNumericParam = (people, param, order = 'asc') => {
  const array = people.map((person) => {
    const object = {
      ...person,
    };

    object[param] = object[param].replace(/,/g, '');
    object[param] = parseFloat(object[param]);

    return object;
  });

  return _.orderBy(array, [param], [order]);
};

const sortByParamMapper = {
  name: sortByStringParam,
  height: sortByNumericParam,
  mass: sortByNumericParam,
};

const sortPeopleBy = (people, param, order) => (Object.keys(sortByParamMapper).includes(param) ? sortByParamMapper[param](people, param, order) : people);

module.exports = sortPeopleBy;
