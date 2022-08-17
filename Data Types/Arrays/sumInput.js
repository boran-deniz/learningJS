/* Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. */

let inputArray = [];

function askNumber(){
    let input = prompt("Please enter your number", );
    if (input === "" || input === null || !isFinite(input)) {
        askNumber();
    } else {
        inputArray.push(input);
        alert(inputArray);
    };
};


askNumber();