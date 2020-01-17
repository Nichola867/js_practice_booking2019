const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("Returns the sum of numbers in an array which are multiples of 3 or 5", () => {
        expect(sumMultiples([2, 3, 5, 7])).toBe(8);
        expect(sumMultiples([4, 7, 27, 15, 9])).toBe(51)
    });
});

describe("isValidDNA", () => {
    test("Returns true or false depending on whether the DNA string is valid, containing letters C,G,T or A", () => {
        expect(isValidDNA("TTTGTAGC")).toBe(true)
        expect(isValidDNA("HHAPRRS")).toBe(true)
        expect(isValidDNA("RRSDWWS")).toBe(false)
        expect(isValidDNA("FFSGSSG")).toBe(true)
        expect(isValidDNA("RRHTAAR")).toBe(true)
    })
})

describe("getComplementaryDNA", () => {
    test("String returns its complementary base pair", () => {
        expect(getComplementaryDNA("CTAG")).toBe("GATC")
        expect(getComplementaryDNA("A")).toBe("T")
        expect(getComplementaryDNA("C")).toBe("G")
        expect(getComplementaryDNA("T")).toBe("A")
        expect(getComplementaryDNA("G")).toBe("C")
        expect(getComplementaryDNA("ACTG")).toBe("TGAC")
        expect(getComplementaryDNA("TTGA")).toBe("AACT")
    })
})

describe("isItPrime", () => {
    test("Returns true if number is a prime number and false if not", () => {
        expect(isItPrime(3)).toBe(true)
        expect(isItPrime(21)).toBe(false)
        expect(isItPrime(89)).toBe(true)
        expect(isItPrime(620)).toBe(false)
    })
})

describe("createMatrix", () => {
    test("Returns an array of arrays containing a word multipled by a given number", () => {
        expect(createMatrix(3, "foo")).toEqual([
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]])
        expect(createMatrix(4, "pop")).toEqual([
            ["pop", "pop", "pop", "pop"],
            ["pop", "pop", "pop", "pop"],
            ["pop", "pop", "pop", "pop"],
            ["pop", "pop", "pop", "pop"]])
    })
})

xdescribe("areWeCovered", () => {
    test("Returns true if at least 3 staff members are scheduled to work on a given day", () => {
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]},
            { name: "George", rota: ["Sunday", "Monday", "Wednesday", "Friday"]},
            { name: "Linda", rota: ["Monday", "Tuesday", "Friday", "Saturday"]}
        ]
        expect(areWeCovered(staff, "Tuesday")).toBe(true)
        expect(areWeCovered(staff, "Friday")).toBe(true)
        expect(areWeCovered(staff, "Saturday")).toBe(false)
    })
})