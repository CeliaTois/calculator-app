const buttons = document.querySelectorAll (".btn");
const result = document.getElementById ("result");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        result.textContent = e.target.innerText;
    })
})

let total = 0;

function addition(x) {
    total += x;
    return total;
}

function soustraction(x) {
    total -= x;
    return total;
}

function division(x) {
    if (total === 0) { // Condition, permet de diviser même si l'on commence de 0
        return (total = x);
    } else {
    total /= x;
    return total;
    }
}

function multiplication(x) {
    if (total === 0) { // Condition, permet de multiplier même si l'on commence de 0
        return (total = x);
    } else {
    total *= x;
    return total;
    }
}

function reset() {
    total = 0; // Remet la calculatrice à 0
}