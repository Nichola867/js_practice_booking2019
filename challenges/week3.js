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

  let allWords = words.map(word => word[0].toUpperCase() + word.slice(1)).join('');
  return allWords[0].toLowerCase() + allWords.slice(1);
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  var result = people.map(n => n.subjects.length);
  return result.reduce(((total, n) => total += n), 0);
}

//returns false if no menu items include the specified ingredient"
function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  return menu.filter((n) => n.ingredients.includes(ingredient)).length > 0;
}



function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let commonNums = arr1.filter(n => arr2.includes(n));
  return commonNums.filter((n, i) => commonNums.indexOf(n) === i).sort();


  // This also works but is less descriptive in how it functions:
  // let noDups = Array.from(new Set(commonNums));
  // return noDups.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
