const greeting = require('./src/greeting');

test("returns greeting with custom name", () => {
	expect(greeting("Mei")).toBe("Hello, Mei!");
});