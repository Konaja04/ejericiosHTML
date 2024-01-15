let symbols = ["❤","😂", "🤣"]
let listaCasillas = []
function crearCasillas(){
    let conta = 0
    symbols.forEach(element => {
        let casilla1 = {
            symbol : symbols[0], 
            isShowed : false,
        }
        let casilla2 = {
            symbol : symbols[0], 
            isShowed : false,
        }
        symbols.push(casilla1)
        symbols.push(casilla2)
        
    });
}
function devolverCasillas(row, col){
    const pos = row * 3 + col
    return pos
}
function ponerSimbolosCasillas(){
    for(let i = 0; i < 2; i++){
        for (let j = 0; j < 2; j++){
            const but = document.getElementById(i+"_"+j)
            console.log(but)
        }
    }
}
function main( ){
    crearCasillas()
}
main()