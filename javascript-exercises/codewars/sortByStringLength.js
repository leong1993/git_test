// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, or dered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
function sortByLength (s1) {
  // Return an array containing the same strings, ordered from shortest to longest
  let temp = '';
  let checkstage = false;
  
  do{
    checkstage = false; //set to false at here
    for (let i = 0; i < s1.length - 1; i++) {
      if (s1[i].length > (s1[i + 1].length)) {
        temp = s1[i];
        s1[i] = s1[i + 1];
        s1[i + 1] = temp;
        checkstage = true; // everytime loop in to if statement, change checkstage = true
      }

      }
  
    } while (checkstage);

  return s1;
  }
