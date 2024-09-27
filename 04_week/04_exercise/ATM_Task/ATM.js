"use strict"
let balance = 1000;
function checkBalance() {
    console.log(`Your current balance is : ${balance}`);
}

function deposit() {
    let depositAmount = +prompt('Enter deposit amount');
    console.log(`Your deposit of : ${depositAmount} is successful`);
    if (depositAmount >= 0) {
        balance = depositAmount + balance;
        checkBalance();
    }
    else {
        alert('Enter a positive amount');

    }
}

function withdraw() {
    let cashout = +prompt('Enter a amount to be withdrawn');
    console.log(`You are withrawing: ${cashout}`)
    if (balance >= cashout) {
        balance = (balance - cashout);
        checkBalance();
    }
    else {
        alert('Enter a greater amount to be withdrawn: Try again');

    }
}
function main() {
    let userAction = true;
    while (userAction) {

        let input = +prompt('What would you like to choose: \n 1.checkBalance\n 2. deposit \n 3. withdraw \n 4. exit');
        switch (input) {
            case 1: checkBalance();
                break;
            case 2: deposit();
                break;
            case 3: withdraw();
                break;
            case 4: userAction = false;
                break;
            default: alert('Enter a valid userAction between 1 and 4')
        }
    }
}
main();







