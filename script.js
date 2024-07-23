const greetUser = (name) => {
  return `Hello, ${name}! Welcome!`;
};

const calculateSum = (a, b) => {
  return a + b;
};

const isEven = (number) => {
  return number % 2 === 0;
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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