const add = (number1, number2) => number1 + number2;
const sub = (number1, number2) => number1 - number2;
const mul = (number1, number2) => number1 * number2;
const div = (a, b) => (b === 0 ? "dzielisz małpo przez 0?" : a / b);

function oblicz(dzialanko) {
    const wartosc1 = Number(document.getElementById("num1").value);
    const wartosc2 = Number(document.getElementById("num2").value);

    const result = dzialanko(wartosc1, wartosc2);
    document.getElementById("result").textContent = result;
    console.log(result);
}