const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species
      .reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  }
  const { specie, sex } = animal;

  if (specie && sex) {
    return data.species
      .find(({ name }) => name === specie).residents
      .filter(({ sex: sexAnimal }) => sexAnimal === sex).length;
  }

  if (specie) {
    return data.species.find(({ name }) => name === specie).residents.length;
  }

}

module.exports = countAnimals;
