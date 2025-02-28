let display = document.getElementById("display");

function appendInput(value) {
    if (value === "*") {
        display.value += "X";
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value.replace(/X/g, '*').replace('%', '/100'));
        display.value = result.toString().replace('*', 'X');
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (key === "Tab") {
        event.preventDefault(); // Mencegah tab berpindah fokus di dalam kalkulator
    } else if (/\d|\.|\+|\-|\*|\/|%/.test(key) && key !== "Enter") {
        appendInput(key === "*" ? "X" : key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
