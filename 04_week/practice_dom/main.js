const button = document.querySelector('#secondId');
const headline = document.querySelector('h1');

console.log(headline.textContent);

function food() {
    console.log("This was triggered in html!!!");
    headline.textContent = 'what I just did????'
    button.style.color = 'green'
}

function secondId() {
    console.log("This is from :addEventListener")
    headline.textContent = "I fixed it"
    headline.style.fontSize = '100px'
    headline.style.backgroundColor = 'violet'

}

button.addEventListener('click', secondId)


/* const myPara = document.getElementsByTagName('p')
const firstId = document.getElementById('firstId')
const mySecondID = document.querySelector('#firstId')
const mySecondClass = document.querySelectorAll('.myClass')
const myClass = document.getElementsByClassName('myClass');
const myClass2 = document.querySelector('.myclass2')


console.log(myClass);
console.log(mySecondClass);
console.log(myClass2);


console.log(myPara);
console.log(firstId);
console.log(mySecondID);

function myFunction() {
    alert("Example of button");
} */








