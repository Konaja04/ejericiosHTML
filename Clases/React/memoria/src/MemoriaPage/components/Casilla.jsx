import './Casilla.css';
const Casilla = (props)=>{
    const casillaOnClick=()=>{
        console.log(`mostrando row: ${props.casilla.row} col: ${props.casilla.col}`)
        props.mostrarOnclick(props.casilla.row, props.casilla.col)
        
    }
    return <div className="col">
        <button className="boton btn-light" type="button"
        dangerouslySetInnerHTML={{
            __html: props.casilla.isShowed ? props.casilla.simbolo : 'XD',
          }}
        onClick={casillaOnClick}>
        </button>
    </div>
}
export default Casilla