/**
 * Greets the user by name.
 * @param {string} name - The name of the user.
 * @returns {void} 
 */
const greetUser = (name) => {
  return `Hello, ${name}! Welcome!`;
};

/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
const calculateSum = (a, b) => {
  return a + b;
};

/**
 * Checks if a number is even.
 * @param {number} number - The number to check.
 * @returns {boolean} True if the number is even and false otherwise.
 */
const isEven = (number) => {
  return number % 2 === 0;
};

/**
 * Reverses a string.
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */
const reverseString = (str) => {
  return str.split("").reverse().join("");
};


/**
 * Generates a random number.
 * @param {number} min - The minimum number.
 * @param {number} max - The maximum number.
 * @returns {number} A random number.
 */
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Capitalizes a string.
 * @param {string} str - The string to be capitalized.
 * @returns {string} The capitalized string.
 */
const capitalizeFirstLetter = (str) => {
  if (typeof str !== "string" || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Normalize the string
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const getUniqueValues = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const uniqueSet = new Set(arr);
  return Array.from(uniqueSet);
};

module.exports = {
  greetUser,
  calculateSum,
  isEven,
  reverseString,
  generateRandomNumber,
  capitalizeFirstLetter,
  isPalindrome,
  getUniqueValues,
};

// Added notifications
// Secret added