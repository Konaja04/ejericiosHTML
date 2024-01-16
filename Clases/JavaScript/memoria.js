let symbols = ["❤","😂", "🤣"]
let listaCasillas = []
function crearCasillas(){
    let conta = 0
    symbols.forEach(element => {
        let casilla1 = {
            symbol : element, 
            isShowed : false,
            color : "blue",
        }
        let casilla2 = {
            symbol : element, 
            isShowed : false,
            color : "blue",
        }
        listaCasillas.push(casilla1)
        listaCasillas.push(casilla2)
        
    });
}
function devolverCasillas(row, col){
    const pos = row * 3 + col
    return listaCasillas[pos]
}
function ponerSimbolosCasillas(){
    for(let i = 0; i <= 2; i++){
        for (let j = 0; j <= 2; j++){
            const casilla = devolverCasillas(i,j)
            const but = document.getElementById(i+"_"+j) 
            if (casilla && casilla.isShowed) {
                but.innerHTML = casilla.symbol
                console.log(casilla.color)
                but.style.backgroundColor = casilla.color
            }
            else if (casilla && !casilla.isShowed){
                but.innerHTML = "❓"
            }
        }
    }
}
let casillaJuego
function casillaOnClick(row, col){
    const but = devolverCasillas(row, col)
    but.isShowed = true
    const but2 = casillaJuego
    if (but2 != null){
        if (but.symbol==but2.symbol){
            but.color = "green"
            but2.color = "green"
        }
        else{
            but.color = "red"
            but2.color = "red"
            ponerSimbolosCasillas()
            setTimeout(() => {
            console.log("caac")
                but.isShowed = false
                but2.isShowed = false
                but.color = "yellow"
                but2.color = "yellow"
                casillaJuego = null
                ponerSimbolosCasillas()
            }, 2000);
        }
        casillaJuego = null
    }
    else{
        but.color="yellow"
        casillaJuego = but
    }
    ponerSimbolosCasillas()
}
function main( ){
    crearCasillas()
    ponerSimbolosCasillas()
}
main()