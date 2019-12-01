//returns an array of numbers smaller than 1
function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(n => n < 1);
}

//"returns an array of names beginning with the specified character"
function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter(n => n[0] === char);
}


//returns an array of words that are considered verbs (because they begin with 'to ')"
function findVerbs(words) {
  if (!words) throw new Error("words is required");

  return words.filter(n => n.substring(0, 3).match("to "));
}


//returns an array containing only integers"
function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(n => n % 1 === 0);
}


//returns an array of the cities of each user"
function getCities(users) {
  if (!users) throw new Error("users is required");

  let cities = users.map(n => n.data.city.displayName);
  return cities;
}


//gets the square root of each number to 2 decimal places
function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  let srNums = nums.map(n => Math.sqrt(n));
  let decPlace = srNums.map(n => Math.round(n * 100) / 100);
  return decPlace;
}


//"returns only the sentences containing the specified string
function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const upperStr = str.toUpperCase();
  let sentence = sentences.filter(n => n.toUpperCase().includes(upperStr));
  return sentence;
}


//"returns the longest side of each set of triangle data
function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  //take each item in array and put in decreasing number order using .sort, return first index using slice
  function sortNumber(a, b) {
    return b - a;
  }
  let sortNums = triangles.map(n => n.sort(sortNumber)[0]);
  return sortNums;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
