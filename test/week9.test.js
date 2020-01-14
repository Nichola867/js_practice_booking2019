const {
    sumMultiples,
    // isValidDNA,
    // getComplementaryDNA,
    // isItPrime,
    // createMatrix,
    // areWeCovered,
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("Returns the sum of numbers in an array which are multiples of 3 or 5", () => {
        expect(sumMultiples([2, 3, 5, 7])).toBe(8);
        expect (sumMultiples([4, 7, 27, 15, 9])).toBe(51)
    });
});