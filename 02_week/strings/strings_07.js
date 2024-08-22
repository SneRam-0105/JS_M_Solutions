/**
Refine the concatInitials function to return a string that combines the firstNameInitial followed by the lastNameInitial.
 */

function concatInitials(firstNameInitial, lastNameInitial) {


    return firstNameInitial.concat(" ", lastNameInitial);
}

concatInitials("Sneha", "R")

//alternative solution
function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial + lastNameInitial;
}

// Sample usage - do not modify
console.log(concatInitials('J', 'D')); // "JD"
console.log(concatInitials('S', 'B')); // "SB"
