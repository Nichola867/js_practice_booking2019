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
