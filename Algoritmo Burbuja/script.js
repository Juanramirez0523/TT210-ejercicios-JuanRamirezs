function sortArray() {
    let inputArray = document.getElementById('inputArray').value.split(',').map(Number);
    let resultDiv = document.getElementById('result');
    let arrayLength = inputArray.length;
    
    // Algoritmo de burbuja
    for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (inputArray[j] > inputArray[j + 1]) {
                // Intercambio de elementos
                let temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
            }
        }
    }

    // Mostrar el resultado
    resultDiv.textContent = `Array ordenado: ${inputArray.join(', ')}`;
}
