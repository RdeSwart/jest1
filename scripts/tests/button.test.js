const { TestScheduler } = require("jest");
const buttonClick = require("./button"); //importing button click function from source file

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    //This test gets all of the h1 tags and stores them  
    //in a special kind of array. If the h1 exists, then the length of the 
    //array will be 1. If two h1  tags existed the length would be two, and so on. 
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    })
});