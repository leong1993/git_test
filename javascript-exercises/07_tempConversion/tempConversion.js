const ftoc = function(ftemp) {
  let celsius = (ftemp - 32) * 5 / 9;
  return parseFloat(celsius.toFixed(1));
};

const ctof = function(ctemp) {
  let fahrenheit = ctemp * 9 / 5 + 32;
  return parseFloat(fahrenheit.toFixed(1));
};
// console.log(ctof(-10));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
