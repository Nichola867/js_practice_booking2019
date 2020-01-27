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
        expect(createRange(4, 9)).toEqual(4, 5, 6, 7, 8, 9)
    })
})

describe("getScreentimeAlertList", () => {
    test("Return an array of users that use over 100 mins of screentime on a given date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ]
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"])
    })
})

describe("hexToRGB", () => {
    test("Receive a Hex colour code and return the RGB equivalent", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)")
        expect(hexToRGB("#AA3324")).toBe("rgb(170,51,36)")
        expect(hexToRGB("#DD4232")).toBe("rgb(221,66,50)")
    })
})


describe("findWinner", () => {
    test("Returns X if player X has won", () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ])).toBe("X")
    })
    test("Returns 0 if player 0 has won", () => {
        expect(findWinner([
            ["0", "0", null],
            ["X", "0", "0"],
            ["X", null, "0"]
        ])).toBe("0")
    })
    test("Returns null if no one has won", () => {
        expect(findWinner([
            [null, null, "X"],
            ["0", null, "X"],
            ["X", "0", "0"]
        ])).toBe(null)
    })
    test("Returns X if player X has won vertically", () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ])).toBe("X")
    })
    test("Returns 0 if player 0 has won diagonally", () => {
        expect(findWinner([
            ["0", "0", null],
            ["X", "0", "0"],
            ["X", null, "0"]
        ])).toBe("0")
    })
    test("Returns x if no one has horizontally", () => {
        expect(findWinner([
            ["0", "0", null],
            ["X", "X", "X"],
            ["X", null, "0"]
        ])).toBe("X")
    })
    test("Returns x where a row of x's overwrites a row of nulls", () => {
        expect(findWinner([
            [null, null, null],
            ["X", "X", "X"],
            ["X", null, "0"]
        ])).toBe("X")
    })
})
