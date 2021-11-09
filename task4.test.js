const capitalize = require('./task4');

test('Capitalize first letter of a string', () => {
  //Arrange
  const string = 'emmanuel';
  //Act
  let newString = capitalize(string);

  //assert
  expect(newString).toBe('Emmanuel');
})