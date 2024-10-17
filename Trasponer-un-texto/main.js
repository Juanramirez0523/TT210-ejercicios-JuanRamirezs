// Obtener referencias a los elementos del DOM
const btn = document.getElementById('btn');
const resultado = document.getElementById('reversedText');

// Función para invertir el texto
function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}

// Evento de clic del botón
btn.addEventListener('click', () => {
    const texto = document.getElementById('texto').value;
    const textoInvertido = invertirTexto(texto);
    resultado.textContent = textoInvertido;
});
