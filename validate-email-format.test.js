
const {isValidEmail} = require("./validate-email-format.js");
test("valid email format ",()=>{
    expect(isValidEmail("test@gmail.com")).toBe(true);
});

test("invalid email format",()=>{
    expect(isValidEmail("invalid email")).toBe(false);
});

