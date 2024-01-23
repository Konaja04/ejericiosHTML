import Casilla from "./Casilla"

const Fila = (props)=>{
    console.log(props)
    return <div className="row">
        {props.listaCasillas.map((casilla)=>(
            <Casilla casilla={casilla} mostrarOnclick={props.mostrarOnclick}/>
        ))}
    </div>
}
export default Fila