/* Write a function named isInRange that takes a number as a parameter and returns true if the number is between 10 and 20 (inclusive), and false otherwise. */


function isInRange(num) {
    if (num >= 10 && num <= 20) {
        console.log("TRUE");
    }
    else {

        console.log("FALSE");
    }
}
isInRange(25);

// Sample usage - do not modify

console.log(isInRange(15));  // Outputs: true
console.log(isInRange(5));   // Outputs: false
console.log(isInRange(20));  // Outputs: true
