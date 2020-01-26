const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("Returns the sum of all digits", () => {
        expect(sumDigits(123)).toBe(6)
        expect(sumDigits(3567)).toBe(21)
        expect(sumDigits(554286)).toBe(30)
    });
});

describe("createRange", () => {
    test("Returns a range of numbers with a given start and end and increment", () => {
        expect(createRange(3, 11, 2)).toEqual(3, 5, 7, 9, 11)
        expect(createRange(2, 11, 3)).toEqual(2, 5, 8, 11)
        expect(createRange(4, 9)).toEqual(4, 5, 6, 7 ,8, 9)
    })
})