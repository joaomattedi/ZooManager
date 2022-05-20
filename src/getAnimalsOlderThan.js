const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find(({ name }) => name === animal).residents
    .every(({ age: animalAge }) => animalAge >= age);
}

module.exports = getAnimalsOlderThan;
