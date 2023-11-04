import TestMe from "./testMe";

test("test", () => {
    const testMe = new TestMe()
    expect(testMe.sayHi("Anita")).toBe("Hi Anita")
})