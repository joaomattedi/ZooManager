const data = require('../data/zoo_data');

const daysOfWeek = Object.keys(data.hours);
const animals = data.species.map(({ name }) => name);

const itsMonday = () => ({
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
});

const returnAllSchedule = () => Object.entries(data.hours).reduce((acc, cur) => {
  if (cur[0] === 'Monday') {
    return ({ ...acc, [cur[0]]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } });
  }
  return ({ ...acc,
    [cur[0]]: {
      officeHour: `Open from ${cur[1].open}am until ${cur[1].close}pm`,
      exhibition: data.species
        .filter(({ availability }) => availability.includes(cur[0]))
        .map(({ name }) => name),
    } });
}, {});

const returnScheduleOfDay = (daySchedule) => {
  if (daySchedule === 'Monday') { return itsMonday(); }
  return Object.entries(data.hours)
    .find(([day]) => day === daySchedule)
    .reduce((acc, cur) => ({
      [acc]: {
        officeHour: `Open from ${cur.open}am until ${cur.close}pm`,
        exhibition: data.species
          .filter(({ availability }) => availability.includes(acc))
          .map(({ name }) => name),
      } }));
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) { return returnAllSchedule(); }

  if (!daysOfWeek.includes(scheduleTarget) && !animals.includes(scheduleTarget)) {
    return returnAllSchedule();
  }

  if (daysOfWeek.includes(scheduleTarget)) {
    return returnScheduleOfDay(scheduleTarget);
  }

  return data.species.find(({ name }) => scheduleTarget === name).availability;
}

module.exports = getSchedule;

// console.log(getSchedule('lions'));
// console.log(getSchedule('Monday'));
// console.log(animals);
// console.log(Object.entries(data.hours));
// console.log(returnScheduleOfDay('Tuesday'));
// console.log(Object.entries(data.hours)
// .find(([day]) => day === 'Tuesday'));
// console.log(returnAllSchedule());
