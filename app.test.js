const { getGreeting } = require("./app")

test("returns greeting with provided name", () => {
expect(getGreeting("Visitor")).toBe("Hello, Visitor")
})