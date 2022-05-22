const data = require('../data/zoo_data');

const getLocationsCoverage = (arrayAnimals) => arrayAnimals.map((animalName) =>
  data.species.find(({ name }) => name === animalName).location);

const getAnimalsCoverage = (employee) => {
  const { name, id } = employee;
  const animalsIdOfEmployee = data.employees
    .find(({ id: fontId, firstName, lastName }) =>
      (name === firstName) || (name === lastName) || (id === fontId)).responsibleFor;
  return animalsIdOfEmployee
    .map((animalId) => data.species
      .find(({ id: specieId }) => animalId === specieId)).map(({ name: specieName }) => specieName);
};

const getAllEmployeesCoverage = () => data.employees.map(({ id, firstName, lastName }) => {
  const animals = getAnimalsCoverage({ id });
  const locations = getLocationsCoverage(animals);
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: animals,
    locations,
  };
});

const validateEmployee = (employee) => {
  const { name, id } = employee;
  return data.employees
    .some(({ id: idToCheck, firstName, lastName }) =>
      (name === firstName) || (name === lastName) || (id === idToCheck));
};

function getEmployeesCoverage(employee) {
  if (!employee) { return getAllEmployeesCoverage(); }
  if (!validateEmployee(employee)) {
    throw new Error('Informações inválidas');
  }
  const animals = getAnimalsCoverage(employee);
  const locations = getLocationsCoverage(animals);
  const { name, id } = employee;
  const employeeSelected = data.employees
    .find(({ id: fontId, firstName, lastName }) =>
      (name === firstName) || (name === lastName) || (id === fontId));
  const { firstName, lastName, id: employeeId } = employeeSelected;
  return {
    id: employeeId,
    fullName: `${firstName} ${lastName}`,
    species: animals,
    locations,
  };
}

module.exports = getEmployeesCoverage;

// console.log(getLocationsCoverage(['tigers', 'bears']));
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage());
