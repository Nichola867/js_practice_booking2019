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

  //let zeros = strArray.filter(n => n === "0").length;
  // let ones = str.filter(n => n === "1").length;
  return {
    0: strArray.filter(n => n === "0").length,
    1: strArray.filter(n => n === "1").length
  }
}

// test("reverses the digits of a number", () => {
// expect(reverseNumber(5)).toBe(5);
//  expect(reverseNumber(104)).toBe(401);

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  let nString = n.toString();
    let nArray = nString.split("");
  let reverseArray = nArray.reverse();
  return Number (reverseArray.join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
