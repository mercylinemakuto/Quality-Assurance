const {fizzBuzz} = require("./fizzbuzz-test");
test("return fizz, buzz or fizzbuzz according to input",()=>{
    expect(fizzBuzz(45)).toBe("FizzBuzz");
    expect(fizzBuzz(12)).toBe("Fizz");
    expect(fizzBuzz(40)).toBe("Buzz");
});