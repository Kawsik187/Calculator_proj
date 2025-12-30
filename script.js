document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('input[name="display"]');
    if (!display) return;
    globalThis.display = display;

    document.addEventListener('keydown', function (event) {
        const key = event.key;

        if (key >= '0' && key <= '9') {
            display.value += key;
        }
        if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
            display.value += key;
        }
        if (key === '.') {
            display.value += key;
        }
        if (key === 'Enter' || key === '=') {
            event.preventDefault();
            display.value = eval(display.value);
        }
        if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        }
        if (key === 'Escape' || key.toLowerCase() === 'c') {
            display.value = '';
        }
    });
});