function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the value to the display
}

function clearDisplay() {
    document.getElementById('display').value = ''; // Clear the display
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use Function constructor instead of eval for safer evaluation
        display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (error) {
        display.value = 'Error'; // Show "Error" on invalid input
    }
}
