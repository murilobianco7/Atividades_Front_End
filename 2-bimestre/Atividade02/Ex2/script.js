let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let bloqueio = false;

celsius.addEventListener("input", function () {
    if (bloqueio) return;
    let c = parseFloat(celsius.value);

if (isNaN(c)) {
        fahrenheit.value = "";
        return;
    }

    bloqueio = true;

    let f = (c * 9/5) + 32;
    fahrenheit.value = f.toFixed(2);

    bloqueio = false;
});
fahrenheit.addEventListener("input", function () {
if (bloqueio) return;

    let f = parseFloat(fahrenheit.value);

    if (isNaN(f)) {
        celsius.value = "";
        return;
    }
bloqueio = true;
    let c = (f - 32) * 5/9;
    celsius.value = c.toFixed(2);

    bloqueio = false;
});