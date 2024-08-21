// Create a function named isEven that takes a number as a parameter and returns true if the number is even, and false if the number is odd.
function isEven(number) {

   return (number % 2 === 0); // three equal signs as to check the type of the answer
}
isEven(57);

//arrow function 

const isEven = (number) => number % 2 === 0;
console.log(isEven(4));
// another method 
let n = 57;
isEven(n) ? console.log("True") : console.log("False");
// sample usage - do not modify
console.log(isEven(4)); // Returns true
console.log(isEven(7)); // Returns false
