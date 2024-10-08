/**
Refine the getLastCharacter function so that it returns the last character from the name parameter it receives.
 */

function getLastCharacter(name) {
  return name.charAt(name.length - 1);

}
getLastCharacter("Webpage")


// Sample usage - do not modify
console.log(getLastCharacter('Sam')); // "m"
console.log(getLastCharacter('Alex')); // "x"
console.log(getLastCharacter('Charley')); // "y"
