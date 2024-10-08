/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

const input = document.querySelector('#fruitInput') //You can declare this directly inside the function: const inputValue = document.querySelector('#fruitInput).value 
const button = document.getElementById('addFruitBtn')
const list = document.getElementById("fruitList")


function fruitList() {
    console.log(input.value);//input does not work with textContent
    const newElement = document.createElement('li');
    newElement.textContent = input.value;
    list.appendChild(newElement) //add a new element in the list

    input.value = '' //input field is cleared and you can add the next input

}

button.addEventListener('click', fruitList)
