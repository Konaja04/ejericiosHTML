import { useState } from "react"
import Tablero from "./components/Tablero"
const simbolosDisponibles = ['💖', '😊','🤦‍♀️']
const MemoriaPage = () =>{
    const [listaFilas, setListaCasillas] = useState([])
    const mostrarOnclick = (row, col) =>{
        const nuevaListaCasillas = [...listaFilas]
        nuevaListaCasillas[row][col].isShowed = true
        setListaCasillas(nuevaListaCasillas)
        // console.log(listaFilas)
    }
    for(let i = 0; i<2;i++){
        const fila = []
        for(let j = 0; j<3;j++){
            fila.push({
                simbolo: simbolosDisponibles[j],
                isShowed: false,
                row: i,
                col: j,
            })
        }
        listaFilas.push(fila)
    }
    return <div>
        <h1>Juego de Memoria</h1>
        <Tablero listaFilas={listaFilas} mostrarOnclick={mostrarOnclick}/>
    </div>
}
export default MemoriaPage