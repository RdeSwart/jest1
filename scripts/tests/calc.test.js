//const { TestScheduler } = require("jest");
const addition = require("./calc.js");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });

    });
    describe("Subtraction function", () => {

    });
    describe("Multiplication function", () => {

    });
    describe("Division function", () => {

    });
});

// Potential Test Ideas:
// Test for No parameters
// Test for missing parameter
// String as one or both parameters
// Null as one or both parameters
// Undefined as a parameter
// Does it work with floating point numbers?
// What about negative numbers?