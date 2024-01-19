let resultado = '0'
function pintar() {
    const pantalla = document.getElementById("pantalla")
    pantalla.innerHTML = resultado
}

function appendToDisplay(value) {
    if (resultado == 0) {
        resultado = (resultado += value).substring(1)
    } else {
        resultado += value;
    }
    pintar()
}

function clearDisplay() {
    resultado = value;
    pintar()
}

function calculateResult() {
    console.log('aaa');
    try {
        resultado = eval(resultado);
        pintar()
        resultado = '0'
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
    }
}
function main() {
    pintar()
}
main()