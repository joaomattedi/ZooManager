const data = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];

const getAnimals = (location) => data.species.filter(({ location: animalLocation }) =>
  location === animalLocation).map(({ name }) => name);

const getAnimalsName = (animal, sorted, sex) => {
  if (sex && sorted) {
    return ({ [animal]: data.species.find(({ name }) =>
      name === animal).residents.filter(({ sex: animalSex }) =>
      sex === animalSex).map(({ name }) => name).sort() });
  }
  if (sorted) {
    return ({ [animal]: data.species.find(({ name }) =>
      name === animal).residents.map(({ name }) => name).sort() });
  }
  if (sex) {
    return ({ [animal]: data.species.find(({ name }) =>
      name === animal).residents.filter(({ sex: animalSex }) =>
      sex === animalSex).map(({ name }) => name) });
  }
  return ({ [animal]: data.species.find(({ name }) =>
    name === animal).residents.map(({ name }) => name) });
};

const getAnimalsByLocation = (sorted, sex) => locations.reduce((acc, cur) =>
  ({ ...acc,
    [cur]: getAnimals(cur).map((specieName) => getAnimalsName(specieName, sorted, sex)) }), {});

function getAnimalMap(options) {
  if (!options) {
    return locations.reduce((acc, cur) =>
      ({ ...acc, [cur]: getAnimals(cur) }), {});
  }
  const { includeNames, sorted, sex } = options;
  if (!includeNames) {
    return locations.reduce((acc, cur) =>
      ({ ...acc, [cur]: getAnimals(cur) }), {});
  }
  return getAnimalsByLocation(sorted, sex);
}

module.exports = getAnimalMap;

console.log(getAnimalMap());
