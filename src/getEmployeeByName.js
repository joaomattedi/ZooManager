const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees
    .find(({ firstName, lastName }) => employeeName === firstName || employeeName === lastName);
}

module.exports = getEmployeeByName;
