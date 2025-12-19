// Get the display input element
const display = document.querySelector('input[name="display"]');

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Numbers (0-9)
    if (key >= '0' && key <= '9') {
        display.value += key;
    }

    // Operators
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        display.value += key;
    }

    // Decimal point
    if (key === '.') {
        display.value += '.';
    }

    // Enter or = to calculate
    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        display.value = eval(display.value);
    }

    // Backspace to delete
    if (key === 'Backspace') {
        display.value = display.value.toString().slice(0, -1);
    }

    // Escape or C to clear
    if (key === 'Escape' || key.toLowerCase() === 'c') {
        display.value = '';
    }
});