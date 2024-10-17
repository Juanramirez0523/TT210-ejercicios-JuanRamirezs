
const btn = document.getElementById('btn');
const resultado = document.getElementById('resultado');

//encontrar números primos
function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function encontrarPrimos(n) {
    let primos = [];
    for (let i = 2; i <= n; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}


btn.addEventListener('click', () => {
    const num = parseInt(document.getElementById('num1').value);
    const primos = encontrarPrimos(num);
    resultado.textContent = `Los números primos hasta ${num} son: ${primos.join(', ')}`;
});
