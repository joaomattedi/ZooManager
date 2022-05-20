const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('empty', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
});
