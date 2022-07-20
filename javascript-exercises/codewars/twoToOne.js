function longest(s1, s2) {
//a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
  // your code
  let newString = s1 + s2;
  let newStringSpliced = newString.split('');
  let finalString = [];
  for (let element of newStringSpliced) {
    if(!finalString.includes(element)) {
      finalString.push(element);
    }
  }
  return finalString.sort().join('');
}
