// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

function avgSpeed() {
    let distance
    let time


    while (distance != 0) {
        distance = +prompt("Enter the distance in Km (use numbers)"); // + converts string to number

        if (distance == 0) {
            console.log("Game over");
            break;
        }
        time = +prompt("enter time in hours (use numbers) ");

        let average = distance / time;
        alert("average is: " + average)
        console.log('data: ', distance, time, average);
    }
}
avgSpeed()