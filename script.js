const greetUser = name => {
    return `Hello, ${name}! Welcome!`;
}

const calculateSum = (a,b) => {
    return a + b
}

const isEven = number => {
    return number % 2 === 0;
}

const reverseString = str => {
    return str.split('').reverse().join('');
}

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

const capitalizeFirstLetter = str => {
    if(typeof str !== 'string' || str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { greetUser, calculateSum, isEven, reverseString, generateRandomNumber, capitalizeFirstLetter }; 