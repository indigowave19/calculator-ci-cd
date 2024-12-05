/**
 * Appends the value of the clicked button to the display.
 * @param {string} value - The value to append (e.g., a number or operator).
 */
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Concatenate the button value to the current display value
}

/**
 * Clears the calculator display.
 */
function clearDisplay() {
    document.getElementById('display').value = ''; // Set the display value to an empty string
}

/**
 * Evaluates the expression in the display and shows the result.
 * If the expression is invalid, displays "Error".
 */
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use Function constructor to safely evaluate the expression
        display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (error) {
        display.value = 'Error'; // Show "Error" if the evaluation fails
    }
}
