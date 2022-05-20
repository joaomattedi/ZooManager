const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const totalEntry = {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };

  return totalEntry;
}

const { adult: adultPrice, child: childPrice, senior: seniorPrice } = data.prices;

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult, child, senior } = countEntrants(entrants);
  return (adult * adultPrice) + (child * childPrice) + (senior * seniorPrice);
}

module.exports = { calculateEntry, countEntrants };

// const entrants = [
//   { name: name.findName(), age: 5 },
//   { name: name.findName(), age: 5 },
//   { name: name.findName(), age: 5 },
//   { name: name.findName(), age: 18 },
//   { name: name.findName(), age: 18 },
//   { name: name.findName(), age: 50 },
// ];
