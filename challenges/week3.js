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
  let allWords = ((words).map((word) => word[0].toUpperCase() + word.slice(1))).join('');
  return allWords[0].toLowerCase() + allWords.slice(1);
}


function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  var result = people.map(n => n.subjects.length);
  var sum = 0

  for (var i = 0; i < people.length; i++) {
    sum += result[i];
  }
  return sum;
}


//returns false if no menu items include the specified ingredient"
//REDO!!!

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      return true;
    }
  }
  return false;
}

//"returns an array of numbers which appear in both arr1 and arr2"

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  //find the commons numbers:
  let commonNums = arr1.filter(n => arr2.includes(n));

  //pull out duplicates into a new array:
  let noDups = Array.from(new Set(commonNums));

  //return new array:
  return noDups.sort();


  //commonNums.filter(n => commonNums.indexOf(n) !== n).sort();
}



module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
