const SORT_BY_PARAMS = ['name', 'height', 'mass'];
const ORDERS = ['asc', 'desc'];

const getPeopleSchema = {
  sortBy: {
    in: ['query'],
    custom: {
      options: (value) => SORT_BY_PARAMS.includes(value),
      errorMessage: 'Invalid sortBy param',
    },
    optional: true,
  },
  order: {
    in: ['query'],
    custom: {
      options: (value) => ORDERS.includes(value),
      errorMessage: 'Invalid order param',
    },
    optional: true,
  },
};

module.exports = getPeopleSchema;
