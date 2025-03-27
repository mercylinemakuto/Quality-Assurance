
const {add, subtract, multiply, divide}= require("./simple-math-function");



test('add 2 and 5 to equal 7', ()=>{
    expect (add(2,5)).toBe(7);
});

test('substract 10 from 80 to equal 70', ()=>{
    expect (subtract(80,10)).toBe(70);
});

test('multiply 20 and 30 to equal 600', ()=>{
    expect (multiply(20,30)).toBe(600);
});

test('divide 50 and 25 to equal 2', ()=>{
    expect (divide(50,25)).toBe(2);
});