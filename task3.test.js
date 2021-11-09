const calculator = require('./task3');

describe('Calculate variables', () => {
  // Arrange

  const calc = new calculator();
  test('Add a, b', () => {
    // Act and Assert
    expect(calc.add(1, 3)).toBe(4);
    expect(calc.add(5, 3)).toBe(8);
    expect(calc.add(6, 8)).toBe(14);
  });

  test('substract a, b', () => {
    // Act and Assert
    expect(calc.sub(4, 3)).toBe(1);
    expect(calc.sub(5, 7)).toBe(-2);
    expect(calc.sub(4, 1)).toBe(3);
  });

  test('divide a, b', () => {
    // Act and Assert
    expect(calc.div(4, 4)).toBe(1);
    expect(calc.div(6, 3)).toBe(2);
    expect(calc.div(1, 2)).toBe(0.5);
  });

  test('multiply a, b', () => {
    // Act and Assert
    expect(calc.mul(1, 3)).toBe(3);
    expect(calc.mul(0, 7)).toBe(0);
    expect(calc.mul(4, 2)).toBe(8);
  });
});