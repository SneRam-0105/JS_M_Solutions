// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.

function fahrenheitToCelsius(Fahrenheit) {
    x = (Fahrenheit - 32) * 5 / 9;
    console.log(x);
    return x = Math.round(x);

}
fahrenheitToCelsius(98)

// Alternative Method

function fahrenheitToCelsius(f) {
    return ((f - 32) * 5 / 9).toFixed();
}
fahrenheitToCelsius(98)

// Sample usage - do not modify
//console.log(fahrenheitToCelsius(21)); // "-6,1"
