const planetsInteractor = require('../../interactors/planets');

const getPlanets = async (req, res, next) => {
  try {
    const planets = await planetsInteractor.getPlanets();

    res.status(200).send(planets);
  } catch (error) {
    next(error);
  }
};

module.exports = getPlanets;
