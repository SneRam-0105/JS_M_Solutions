// Complete the function convertNumberToString such that it converts the number it receives into a string.
// Complete the function convertStringToNumber such that it converts the string it receives into a number.

function convertNumberToString(number) {

    return number.toString();

}

convertNumberToString(25);

// converting string to number

function convertStringToNumber(string) {

    return parseInt(string); // return +string also works

}
convertStringToNumber("55");


// arrow function
const convertStringToNumber = (string) => parseInt(string);
convertStringToNumber("55");




// // Sample usage - do not modify
// console.log(convertNumberToString(42)); // "42"
// console.log(convertNumberToString(97)); // "97"
// console.log(convertNumberToString(11)); // "11"

// console.log(convertStringToNumber('42')); // 42
// console.log(convertStringToNumber('97')); // 97
// console.log(convertStringToNumber('11')); // 11
