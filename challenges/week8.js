const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const indexOfN = nums.indexOf(n);

  if (indexOfN > -1 && indexOfN + 1 < nums.length) {
    return nums[indexOfN + 1]
  }
  return null
}


const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  let strArray = str.split("");

  return {
    0: strArray.filter(n => n === "0").length,
    1: strArray.filter(n => n === "1").length
  }
}

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  let nString = n.toString();
  let nArray = nString.split("");
  let reverseArray = nArray.reverse();
  return Number(reverseArray.join(""));
};


const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  let combinedArrs = [].concat.apply([], arrs);
  return (combinedArrs.reduce((a, b) => a + b)
  )
};


const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length < 2) return arr;

  let lastNum = arr.pop()
  let firstNum = arr.shift()

  arr.push(firstNum)
  arr.unshift(lastNum)

  return arr
};


const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");


  for (let x in haystack) {
    if (typeof haystack[x] === "string" && haystack[x].toLowerCase().includes(searchTerm.toLowerCase())) {
      return true
    }
  }
  return false
};


// test("returns the frequencies of each word in a string", () => {
//   expect(getWordFrequencies("hello world")).toEqual({
//     hello: 1,
//     world: 1

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  let strArray = str.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').split(" ");
  //["hello", "world"]

  const strObj = {}
  strArray.forEach(n => strObj[n] = strArray.filter(x => x === n).length)
  return strObj
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
