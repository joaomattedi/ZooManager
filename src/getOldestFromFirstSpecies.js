const data = require('../data/zoo_data');

const getOldestResident = (animalId) => data.species
  .find(({ id }) => id === animalId).residents
  .reduce((acc, cur) => {
    const { name, sex, age } = cur;
    if (acc.length === 0) {
      return [name, sex, age];
    }
    if (acc[2] > age) {
      return acc;
    }
    return [name, sex, age];
  }, []);

function getOldestFromFirstSpecies(employeeId) {
  const firstAnimalOfEmployee = data.employees
    .find(({ id }) => id === employeeId).responsibleFor[0];
  return getOldestResident(firstAnimalOfEmployee);
}

module.exports = getOldestFromFirstSpecies;

// console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
