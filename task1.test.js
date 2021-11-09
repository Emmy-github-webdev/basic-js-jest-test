const stringLength = require('./task1');

test('Check length of string', () => {
  // Arrange
  const string = 'tasks';
  // Act
  const length = stringLength(string);

  // Assert
  expect(length).toBe(5);
});