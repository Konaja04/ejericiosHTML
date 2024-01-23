import Fila from "./Fila"

const Tablero = (props) =>{
    return <div>
        {
            props.listaFilas.map((listaCasillas)=>(
                <Fila listaCasillas={listaCasillas} mostrarOnclick={props.mostrarOnclick}/>
            ))
        }
    </div>
    
}
export default Tablero