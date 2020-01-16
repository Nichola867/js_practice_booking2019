
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");

  //filter by nums divisible by 3 or 5 (use module === 0)
  //add up remaining nums in array (use reduce)
  let filteredArr = arr.filter(n =>
    n % 3 === 0 || n % 5 === 0)

  return ((filteredArr).reduce((a, b) => a + b))
};


const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");

  let strArray = str.split("");
  let arr = strArray.filter(n =>
    n === "C" || n === "A" || n === "G" || n === "T")

  return (arr.length > 0)
}


/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */



const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");

  //change the string to an array using split
  //map through each item in the array
  //for each item, run an if statement to change each letter

  let strArray = str.split("");

  const conversion = (n) => {
    if (n === "A") return "T"
    if (n === "T") return "A"
    if (n === "C") return "G"
    if (n === "G") return "C"
  }
  return strArray.map(conversion).join("")
}


/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
};


module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};


