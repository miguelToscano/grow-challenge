const SORT_BY_PARAMS = ['name', 'height', 'name'];
const ORDERS = ['asc', 'desc'];

const getPeopleSchema = {
  sortBy: {
    in: ['query'],
    isString: {
      errorMessage: 'sortBy has to be a string',
    },
    custom: {
      options: (value) => SORT_BY_PARAMS.includes(value),
      errorMessage: 'Invalid sortBy param',
    },
    optional: true,
  },
  order: {
    in: ['query'],
    isString: {
      errorMessage: 'sortOrder has to be a string',
    },
    custom: {
      options: (value) => ORDERS.includes(value),
      errorMessage: 'Invalid order param',
    },
    optional: true,
  },
};

module.exports = getPeopleSchema;
