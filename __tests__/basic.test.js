const reorderZeros = require('../exercise');

describe('Basic functionality', () => {
  test('Reorder zeros at the beginning', () => {
    expect(reorderZeros([0, 0, 1, 2, 3])).toStrictEqual([1, 2, 3, 0, 0]);
  });

  test('Reorder zeros in the middle', () => {
    expect(reorderZeros([1, 2, 3, 0, 0, 0, 5, 6])).toStrictEqual([1, 2, 3, 5, 6, 0, 0, 0]);
  });

  test('Reorder zeros at the end', () => {
    expect(reorderZeros([1, 2, 3, 0, 0])).toStrictEqual([1, 2, 3, 0, 0]);
  });

  test('No zeros on array', () => {
    expect(reorderZeros([1, 2, 3])).toStrictEqual([1, 2, 3]);
  });

  test('Mixted zeros positions on array', () => {
    expect(reorderZeros([0, 1, 0, 2, 0, 3, 0, 0, 5, 6, 0])).toStrictEqual([1, 2, 3, 5, 6, 0, 0, 0, 0, 0, 0]);
  });
});
