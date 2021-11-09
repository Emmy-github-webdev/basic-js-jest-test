const reverseString = require('./task2');

test('Reverse string', () => {
  // Arrange
  const string = 'test';

  // Act
  const revString = reverseString(string);

  // Assert
  expect(revString).toBe('tset');
});