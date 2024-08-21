// Write a function named findMax that takes three numbers as parameters and returns the largest of the three.


function findMax(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
findMax(256, 367, 678);

// alternative method
function findMax(x, y, z) {
    return Math.max(z, y, x)
}
console.log(findMax(34, 67, 55));

//using arrow function

const findMax = (a, b, c) => Math.max(a, b, c)
console.log(findMax(34, 48, 55));

// Example usage
const largestNumber = findLargest(10, 5, 8);
console.log("Largest number:", largestNumber);



// sample usage - do not modify
console.log(findMax(3, 7, 2)); // Returns 7
console.log(findMax(10, 5, 15)); // Returns 15