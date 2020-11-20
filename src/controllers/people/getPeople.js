const peopleInteractor = require('../../interactors/people');

const getPeople = async (req, res, next) => {
  try {
    const people = await peopleInteractor.getPeople(req.query.sortBy, req.query.order);

    res.status(200).send(people);
  } catch (error) {
    next(error);
  }
};

module.exports = getPeople;
