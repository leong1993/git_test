const reverseString = function(string) {
  // let newString = [];
  // let counter = 0;
  // for (let i = string.length - 1; i >= 0; i--) {
  //   newString[counter] = string[i];
  //   counter ++;
  // }
  let reverses = string.split('').reverse().join('');
  return reverses;
};

// Do not edit below this line
module.exports = reverseString;
