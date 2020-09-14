const reorderZeros = require('../exercise');

describe('Extra functionality', () => {
  test('No digits on array', () => {
    expect(reorderZeros([1, 0, 2, 'TEST', 0, 3])).toStrictEqual([1, 2, 3, 0, 0]);
  });
});
