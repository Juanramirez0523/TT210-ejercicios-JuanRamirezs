
let entradaNumero = document.getElementById("numero");
let btn = document.getElementById("btn");
let salida = document.getElementById("resultado");


function fizzBuzz(n) {
    let results = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            results.push("FizzBuzz");
        } else if (i % 3 === 0) {
            results.push("Fizz");
        } else if (i % 5 === 0) {
            results.push("Buzz");
        } else {
            results.push(i);
        }
    }
    return results;
}

btn.addEventListener("click", () => {
    let numero = parseInt(entradaNumero.value);
    let resultado = fizzBuzz(numero);
    console.log(resultado);
    let hijo = document.createElement("h3");
    hijo.innerHTML = `Resultados: ${resultado.join(", ")}`;
    salida.innerHTML = "";
    salida.appendChild(hijo);
});
