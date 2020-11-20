const getPersonNameByUrl = (people, url) => {
  const foundPerson = people.find((person) => person.url === url);

  return foundPerson && foundPerson.name;
};

module.exports = getPersonNameByUrl;
