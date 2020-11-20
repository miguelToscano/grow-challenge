const swapiPeopleMocks = require('./swapiPeople');
const swapiPlanetsMocks = require('./swapiPlanets');

module.exports = {
    ...swapiPeopleMocks,
    ...swapiPlanetsMocks
}