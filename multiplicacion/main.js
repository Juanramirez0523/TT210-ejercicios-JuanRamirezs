
const btn = document.getElementById('btn');
const resultado = document.getElementById('resultado');

//fun multiplicar dos números
btn.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const product = num1 * num2;
    resultado.textContent = `El resultado de la multiplicación es: ${product}`;
});
