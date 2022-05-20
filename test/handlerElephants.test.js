const { handlerElephants, getElephants, averageAge, computeData } = require('../src/handlerElephants');

const elephants = {
  id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
  name: 'elephants',
  popularity: 5,
  location: 'NW',
  availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
  residents: [
    {
      name: 'Ilana',
      sex: 'female',
      age: 11,
    },
    {
      name: 'Orval',
      sex: 'male',
      age: 15,
    },
    {
      name: 'Bea',
      sex: 'female',
      age: 12,
    },
    {
      name: 'Jefferson',
      sex: 'male',
      age: 4,
    },
  ],
};

const names = ['Ilana', 'Orval', 'Bea', 'Jefferson'];

describe('Testes da função HandlerElephants', () => {
  it('get elephants', () => {
    expect(getElephants()).toEqual(elephants);
  });
  it('average age of elephants', () => {
    expect(averageAge(elephants)).toBe(10.5);
  });
  it('computeData function', () => {
    expect(computeData('count', elephants)).toBe(4);
    expect(computeData('names', elephants)).toEqual(names);
    expect(computeData('averageAge', elephants)).toBe(10.5);
    expect(computeData('default', elephants)).toBeNull();
    expect(computeData()).toBeNull();
  });
  it('handler elephants', () => {
    expect(handlerElephants()).toBeUndefined();
    expect(handlerElephants(9)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('names')).toEqual(names);
    expect(handlerElephants('averageAge')).toEqual(10.5);
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
});
