function reverseString(string){
  return string.toLowerCase().split('').reverse().join('');
}

module.exports = reverseString;