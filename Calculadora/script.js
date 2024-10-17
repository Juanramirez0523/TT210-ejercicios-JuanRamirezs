
// función para añadir valores
function addToDisplay(value) {
    document.getElementById('display').value += value;
}
// limpiar el display
function clearDisplay() {
    document.getElementById('display').value = '';
}
//calcular la operacion
function calculate() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
}
