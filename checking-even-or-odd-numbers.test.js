
const {isEven} = require("./checking-even-or-odd-numbers");
test("test if 12 is even ",()=>{
    expect(isEven(12)).toBe(true)
})