let conta = 0
let listaCasillas = []
let jugador = 1
function llenarCasillas() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let casilla = {
                id: i + "_" + j,
                isTaped: false,
                symbol: '.',
                color: "",
            }
            listaCasillas.push(casilla)
        }
    }
}
function Pintar() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const id = i + "_" + j
            const casilla = devolverCasillas(i, j)
            var but = document.getElementById(id)
            if (casilla && casilla.isTaped) {
                but.innerHTML = casilla.symbol
                but.style.backgroundColor = casilla.color
            }
        }
    }
}

function devolverCasillas(row, col) {
    const pos = 3 * row + col
    return listaCasillas[pos]
}
function comprobarGanador() {
    let gano = false
    //por Filkas xd
    let elementoActual
    let elementSiguiente1
    let elementSiguiente2
    let conta = 0
    console.log(listaCasillas)
    while (conta < 9) {
        console.log(conta)
        elementoActual = listaCasillas[conta].symbol
        elementSiguiente1 = listaCasillas[conta + 1].symbol
        elementSiguiente2 = listaCasillas[conta + 2].symbol
        if (elementSiguiente1 == elementSiguiente2 && elementoActual == elementSiguiente1 && elementoActual != '.') {
            listaCasillas[conta].color = "green"
            listaCasillas[conta + 1].color = "green"
            listaCasillas[conta + 2].color = "green"
            return true
        }
        conta += 3;
    }
    //por Cols
    console.log("no hay filas")
    conta = 0
    while (conta < 3) {
        elementoActual = listaCasillas[conta].symbol
        elementSiguiente1 = listaCasillas[conta + 3].symbol
        elementSiguiente2 = listaCasillas[conta + 6].symbol
        if (elementSiguiente1 == elementSiguiente2 && elementoActual == elementSiguiente1 && elementoActual != '.') {
            listaCasillas[conta].color = "green"
            listaCasillas[conta + 3].color = "green"
            listaCasillas[conta + 6].color = "green"
            return true
        }
        conta++;
    }
    //por diagonales
    elementoActual = listaCasillas[0].symbol
    elementSiguiente1 = listaCasillas[4].symbol
    elementSiguiente2 = listaCasillas[8].symbol
    if (elementSiguiente1 == elementSiguiente2 && elementoActual == elementSiguiente1 && elementoActual != '.') {
        listaCasillas[0].color = "green"
        listaCasillas[4].color = "green"
        listaCasillas[8].color = "green"
        return true
    }
    elementoActual = listaCasillas[2].symbol
    elementSiguiente2 = listaCasillas[6].symbol
    if (elementSiguiente1 == elementSiguiente2 && elementoActual == elementSiguiente1 && elementoActual != '.') {
        listaCasillas[2].color = "green"
        listaCasillas[4].color = "green"
        listaCasillas[6].color = "green"
        return true
    }
    return gano

}
function onTapButton(row, col) {
    const but = devolverCasillas(row, col)
    if (!but.isTaped) {
        but.isTaped = true
        if (jugador == 1) {
            but.symbol = '❌'
            if (comprobarGanador()) {
                console.log("Jugador1 Gana")
            }
        }
        else {
            but.symbol = '⭕'
            if (comprobarGanador()) {
                console.log("Jugador2 Gana")
            }
        }

    }
    jugador *= -1
    conta++
    if (conta == 9) {
        console.log("Nadie Gana")
    }
    Pintar()
}

function main() {
    llenarCasillas()
    Pintar()
}


main()