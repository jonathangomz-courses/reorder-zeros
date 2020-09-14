const reorderZeros = require('../exercise');

describe('Extra functionality', () => {
  test('No array as argument', () => {
    expect(reorderZeros("This is not an array")).toStrictEqual([]);
  });
});
