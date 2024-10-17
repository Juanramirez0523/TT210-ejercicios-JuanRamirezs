// Traer los elementos del DOM
let entradaNumero = document.getElementById("numero");
let entradaElemento1 = document.getElementById("elemento1");
let entradaElemento2 = document.getElementById("elemento2");
let btn = document.getElementById("btn");
let salida = document.getElementById("resultado");

// Inicializando variables, disponibles para todo el código
let numero = 0;
let elemento1 = 0;
let elemento2 = 0;

// Captura los números desde el navegador
entradaNumero.addEventListener("input", (evento) => {
    numero = parseInt(evento.target.value); // Asegúrate de convertir a número
});
entradaElemento1.addEventListener("input", (evento) => {
    elemento1 = parseInt(evento.target.value); // Asegúrate de convertir a número
});
entradaElemento2.addEventListener("input", (evento) => {
    elemento2 = parseInt(evento.target.value); // Asegúrate de convertir a número
});

// Función para calcular el array de Fibonacci
function calcularfibo(n) {
    let fibo = [];
    if (n === 0) {
        fibo = [0];
    } else if (n === 1) {
        fibo = [0, 1];
    } else {
        fibo = [elemento1, elemento2];
        for (let i = 2; i < n; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
    }
    return fibo;
}

// Evento de clic del botón
btn.addEventListener("click", () => {
    let resultado = calcularfibo(numero);
    console.log(resultado);
    let hijo = document.createElement("h3");
    hijo.innerHTML = `La serie de Fibonacci del ${numero} es ${resultado.join(", ")}`;
    salida.appendChild(hijo);
});
