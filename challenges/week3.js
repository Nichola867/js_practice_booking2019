//returns an empty array if empty array passed
//returns an array of squares of the original numbers

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  let squares = nums.map((n) => n * n);
  return squares;
}

//camel cases a single word (i.e. no capital letter at beginning)
function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

//make first letter in array upper case
var firstUpper = []

for(var i = 0; i < words.length; i++) {
  firstUpper.push(words[i].charAt(0).toUpperCase()+words[i].slice(1));
}
  //join together using .join
var oneWord = firstUpper.join('');

  //make first letter lower case
return oneWord.charAt(0).toLowerCase()+oneWord.slice(1);
}


  function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");
    // Your code here!
  }

  function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");
    // Your code here!
  }

  function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    // Your code here!
  }

  module.exports = {
    getSquares,
    camelCaseWords,
    getTotalSubjects,
    checkIngredients,
    duplicateNumbers
  };
