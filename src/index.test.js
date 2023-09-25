const greet = require("./index");
test("Should greet with 'Hello, Webpack!'", () => {
    expect(greet).toBe("Hello, Webpack!");
});