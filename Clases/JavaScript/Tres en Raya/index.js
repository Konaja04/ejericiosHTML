let conta = 0
let listaCasillas=[]
let jugador=1
function llenarCasillas(){
    for (let i = 0; i<3; i++) {
        for (let j = 0; j<3; j++) {
            let casilla = { 
                id : i + "_" + j,
                isTaped : false,
                symbol : "XD",
            }
            listaCasillas.push(casilla)
        }
    }
}
function Pintar(){
    for (let i =0; i<3; i++) {
        for (let j =0; j<3; j++) {
            const id = i+"_"+j
            const casilla = devolverCasillas(i,j)
            var but = document.getElementById(id)
            if (casilla && casilla.isTaped){
                but.innerHTML = casilla.symbol
            }
        }
    }
}
function comprobarGanador(){
    let gano = false
    //por Filkas xd
    let elementoActual
    let elementSiguiente1
    let elementSiguiente2
    let conta = 0 
    while(conta<3)
    {
        elementoActual = devolverCasillas(conta).symbol
        elementSiguiente1 = devolverCasillas(conta+1).symbol
        elementSiguiente2 = devolverCasillas(conta+2).symbol
        if(elementSiguiente1==elementSiguiente2 && elementoActual == elementSiguiente1){
            return true
        }
        conta+=3;
    }
    //por Cols
    conta = 0 
    while(conta<3)
    {
        elementoActual = devolverCasillas(conta).symbol
        elementSiguiente1 = devolverCasillas(conta+3).symbol
        elementSiguiente2 = devolverCasillas(conta+6).symbol
        if(elementSiguiente1==elementSiguiente2 && elementoActual == elementSiguiente1){
            return true
        }
        conta++;
    }
    //por diagonales
    listaCasillas.forEach(element => {
        
    });
    return gano

}
function devolverCasillas(row,col){
    const pos = 3 * row + col
    return listaCasillas[pos]
}
function onTapButton(row, col){
    const but = devolverCasillas(row,col)
    if (!but.isTaped){
        but.isTaped = true
        if (jugador==1){
            but.symbol = '❌'
            if(comprobarGanador()){
                console.log("Jugador1 Gana")
            }
        }
        else{
            but.symbol = '⭕'
            if(comprobarGanador()){
                console.log("Jugador2 Gana")
            }
        }

    }
    jugador*=-1
    conta++
    if (conta==9){   
        console.log("Nadie Gana")
    }
    Pintar()
}

function main(){
    llenarCasillas()
    Pintar()
}


main()