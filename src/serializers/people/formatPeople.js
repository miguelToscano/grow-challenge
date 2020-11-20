const formatPeople = (people) => Array.isArray(people.results) && people.results.map((result) => result);

module.exports = formatPeople;
