const {
  greetUser,
  calculateSum,
  isEven,
  reverseString,
  generateRandomNumber,
  capitalizeFirstLetter,
  isPalindrome,
  getUniqueValues,
} = require("./script");

test("greetUser greets the user", () => {
  expect(greetUser("Lash")).toBe("Hello, Lash! Welcome!");
});

test("calculateSum adds two numbers", () => {
  expect(calculateSum(5, 3)).toBe(8);
});

test("isEven checks if a number is even", () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(7)).toBe(false);
});

test("reverseString reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("generateRandomNumber generates a random number within a range", () => {
  const randomNum = generateRandomNumber(1, 10);
  expect(randomNum).toBeGreaterThanOrEqual(1);
  expect(randomNum).toBeLessThanOrEqual(10);
});

test("capitalizeFirstLetter capitalizes the first letter of a string", () => {
  expect(capitalizeFirstLetter("hello")).toBe("Hello");
  expect(capitalizeFirstLetter("world")).toBe("World");
  expect(capitalizeFirstLetter("")).toBe(""); // Empty string remains unchanged
  expect(capitalizeFirstLetter(123)).toBe(123); // Non-string input remains unchanged
});

test("isPalindrome checks if a string is a palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("12321")).toBe(true);
});

test("getUniqueValues returns unique values from an array", () => {
  expect(getUniqueValues([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(getUniqueValues(["apple", "banana", "apple", "orange"])).toEqual([
    "apple",
    "banana",
    "orange",
  ]);
  expect(getUniqueValues([])).toEqual([]);

  // Test error handling for invalid input
  expect(() => getUniqueValues("not an array")).toThrow(
    "Input must be an array"
  );
});
