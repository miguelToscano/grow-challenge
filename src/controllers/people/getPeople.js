const peopleInteractor = require('../../interactors/people');
const peopleSerializer = require('../../serializers/people');

const getPeople = async (req, res, next) => {
  
  try {

    const people = await peopleInteractor.getPeople(req.query.sortBy);

    const response = peopleSerializer.formatPeople(people);

    res.status(200).send(response);

  } catch (error) {

    next(error);
  }
};

module.exports = getPeople;
