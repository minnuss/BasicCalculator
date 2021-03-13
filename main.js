const buttons = document.querySelectorAll('[type="button"]');
const display = document.querySelector('.display');

// console.log(buttons)

buttons.forEach(button => {

    // ON MOUSE CLICK
    button.addEventListener('click', () => {
        console.log(button.value);
        if (button.value === '÷') {
            display.value += '/';
        } else if (button.value === '−') {
            display.value += '-';
        } else if (button.value === 'x') {
            display.value += '*';
        }
        else if (button.value === '=') {
            display.value = eval(display.value);
        } else if (button.value === 'C') {
            display.value = '';
        } else {
            display.value += button.value;
        }
    })
})

document.body.addEventListener('keydown', (e) => {

    if (e.code === "Numpad0") {
        display.value += '0';
    }
    else if (e.code === "Numpad1") {
        display.value += '1';
    }
    else if (e.code === "Numpad2") {
        display.value += '2';
    }
    else if (e.code === "Numpad3") {
        display.value += '3';
    }
    else if (e.code === "Numpad4") {
        display.value += '4';
    }
    else if (e.code === "Numpad5") {
        display.value += '5';
    }
    else if (e.code === "Numpad6") {
        display.value += '6';
    }
    else if (e.code === "Numpad7") {
        display.value += '7';
    }
    else if (e.code === "Numpad8") {
        display.value += '8';
    }
    else if (e.code === "Numpad9") {
        display.value += '9';
    }
    else if (e.code === "NumpadAdd") {
        display.value += '+';
    }
    else if (e.code === "NumpadSubtract") {
        display.value += '-';
    }
    else if (e.code === "NumpadMultiply") {
        display.value += '*';
    }
    else if (e.code === "NumpadDivide") {
        display.value += '/';
    }
    else if (e.code === "NumpadEnter") {
        display.value = eval(display.value);
    }
    else if (e.code === "Backspace" || e.code === "Escape") {
        display.value = '';
    }
})



