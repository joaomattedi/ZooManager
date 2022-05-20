const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    const time = Object.entries(data.hours);
    const [dayOne, timeWork] = time;
    return `${day}${timeWork}`;
  }

  return data.species.find(({ name }) => scheduleTarget === name).availability;
}

module.exports = getSchedule;

console.log(getSchedule());
