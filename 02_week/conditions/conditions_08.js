/* Write a function named getDayName that takes a number (1-7) as a parameter and returns the corresponding day of the week (1 for Monday, 2 for Tuesday, etc.). If the number is out of range, return "Invalid day". */

function getDayName(day) {

    switch (day) {
        case 1: console.log("Monday");
            break;
        case 2: console.log("Tuesday");
            break;
        case 3: console.log("Wednesday");
            break;
        case 4: console.log("Thursday");
            break;
        case 5: console.log("Friday");
            break;
        case 6: console.log("Saturday");
            break;
        case 7: console.log("Sunday");
            break;
        default: console.log("Invalid day");
    }

}
console.log(getDayName(4))
// Sample usage - do not modify
console.log(getDayName(1));  // Outputs: "Monday"
console.log(getDayName(4));  // Outputs: "Thursday"
console.log(getDayName(8));  // Outputs: "Invalid day"
