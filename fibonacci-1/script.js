function generateFibonacci() {
    let num = document.getElementById('inputNumber').value;
    let resultDiv = document.getElementById('result');
    let fibonacciSequence = [0, 1];

    for (let i = 2; i < num; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }

    resultDiv.textContent = `Secuencia de Fibonacci: ${fibonacciSequence.slice(0, num).join(', ')}`;
}
