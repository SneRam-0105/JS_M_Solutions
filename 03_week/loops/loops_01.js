// Create a program that outputs all odd, positive numbers less than 100, starting from 1, such as 1, 3, 5, 7, 9, 11, and so on.

/*for (let i = 1; i < 100; i++) {
    console.log(i);
    i++
}

//using functions
function oddNumbers() {
    for (let i = 1; i < 100; i++) {
        console.log(i);
        i++
    }
}
oddNumbers(); */



// using while loop
let i = 0;
while (i < 100) {
    if (i % 2 == 1) {
        console.log(i)
    }
    i++
}



