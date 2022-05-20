const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

const closed = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('empty', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('zoo working', () => {
    expect(getOpeningHours('tuesday', '6:30-AM')).toEqual(closed);
  });
  it('validate format', () => {
    const minutesError = () => {
      getOpeningHours('tuesday', '06:c0-AM');
    };
    expect(minutesError).toThrow('The minutes should represent a number');
    const abbreviationError = () => {
      getOpeningHours('tuesday', '06:00-zM');
    };
    expect(abbreviationError).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('validate hours', () => {
    const wrongHours = () => {
      getOpeningHours('tuesday', '13:00-PM');
    };
    expect(wrongHours).toThrow('The hour must be between 0 and 12');
  });
  it('validate minutes', () => {
    const wrongMinutes = () => {
      getOpeningHours('tuesday', '12:60-PM');
    };
    expect(wrongMinutes).toThrow('The minutes must be between 0 and 59');
  });
  it('validate day', () => {
    const wrongDay = () => {
      getOpeningHours('abacaxi', '12:00-PM');
    };
    expect(wrongDay).toThrow('The day must be valid. Example: Monday');
  });
  it('open or closed', () => {
    expect(getOpeningHours('tuesday', '8:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('tuesday', '8:00-PM')).toEqual(closed);
    expect(getOpeningHours('monday', '8:00-PM')).toEqual(closed);
  });
});
