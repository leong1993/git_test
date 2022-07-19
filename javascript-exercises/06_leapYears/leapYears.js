const leapYears = function(years) {
// divisible by 4 = leap years;
// divisible by 100 != leap years unless divisible by 400;
if (years % 4 === 0 && years % 100 != 0) {
  return true;
}
if (years % 4 === 0 && years % 100 === 0 && years % 400 === 0) {
  return true;
}
return false;
};
// Do not edit below this line
module.exports = leapYears;
