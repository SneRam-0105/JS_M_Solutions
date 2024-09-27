/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

const button = document.querySelector('myfunc')
const context = document.getElementById('content');
console.log(context);

function myFunc() {
    context.textContent = "Hello World"
}
button.addEventListener('click', myFunc)