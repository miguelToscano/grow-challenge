const planetsService = require('../../services/planets');
const peopleService = require('../../services/people');
const utils = require('../../utils');

const getPlanets = async () => {
  const [planets, people] = await Promise.all([planetsService.getPlanets(), peopleService.getPeople()]);

  planets.forEach((planet) => {
    // eslint-disable-next-line no-param-reassign
    planet.residents = Array.isArray(planet.residents) ? planet.residents.map((residentUrl) => utils.getPersonNameByUrl(people, residentUrl)) : [];
  });

  return planets;
};

module.exports = getPlanets;
