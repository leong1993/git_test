const removeFromArray = function(...args) {
  // let theArgsLength = theArgs.length;

  // for (let i = 0; i < theArgsLength; i++) { // first loop
  //   indexArr = theArgs.map(element => {  // second loop, high time complexty.
  //     return arr.indexOf(element)
  // })
  
  // if(indexArr[0] != -1) {
  //   arr.splice(indexArr[0] ,1);
  // }
  // theArgs.shift();
  // }  
let arr = args[0];
let newArr = [];

arr.forEach(element => {
  if (!args.includes(element)) {
    newArr.push(element);
  }

  
});
return newArr;
};
// removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
// Do not edit below this line
module.exports = removeFromArray;
