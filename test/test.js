let assert = require("assert");
let Phrase = require("../index.js")
const plainPalindrome = require("../index");

describe("Phrase", function() {
    // 测试回文功能
    describe("#palindrome", function() {
        it("should return false for a non-palindrome", function() {
            let nonPalindrome = new Phrase("apple");
            assert(!nonPalindrome.palindrome());
        })
        it("should return true for a plain palindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        })
        it("should return true for a mixed-case palindrome", function() {
            let mixedCase = new Phrase("RaceCar");
            assert(mixedCase.palindrome());
        })
        it("should return true for a palindrome with punctuation", function() {
            let punctuationPalindrome = new Phrase("Madam, I'm Adam");
            assert(punctuationPalindrome.palindrome());
        })
    });

    // 测试只返回字符流（不包含空格标点）
    describe("#letters", function() {
        it("should return only letters", function() {
            let punctuationPalindrome = new Phrase("Madam, I'm Adam");
            assert.strictEqual(punctuationPalindrome.letters(), "MadamImAdam");
        })
    })
})