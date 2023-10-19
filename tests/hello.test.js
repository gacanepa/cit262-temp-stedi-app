import hello from "../utils/hello";

// Describe the test suite
describe("hello", () => {
  // Test the hello function
  it("Should say 'Hello Gabriel!'", () => {
    expect(hello()).toBe('Hello Gabriel!');
  });
});
