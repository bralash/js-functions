const greetUser = name => {
    console.log(`Hello ${name}! Welcome!`);
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