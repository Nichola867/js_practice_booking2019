//returns an array of numbers smaller than 1

function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
 return nums.filter(n => n<1);
}

//"returns an array of names beginning with the specified character"

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
return names.filter(n => n[0]===char);
}

//returns an array of words that are considered verbs (because they begin with 'to ')"

function findVerbs(words) {
  if (!words) throw new Error("words is required");
return words.filter(n => n.substring(0,3).match("to "));
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
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