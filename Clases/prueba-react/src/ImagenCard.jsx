
import { useState } from 'react';
import './ImagenCard.css';
const ImagenCard = (props)=>{
    const [color, setColor] = useState("0FFFFF")
    const colorChange = {
        backgroundColor: color
    }
    const cardOnClick = () =>{
        if (color == "#0FFFFF")setColor("#FF10FF")
        else setColor("#0FFFFF")
    
    }
    return <div>
    <div className="estiloCard" style={colorChange} onClick={cardOnClick}> 
        <img src={props.url} className="card-img-top" alt="" />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
        </div>
    </div>
</div>
}
export default ImagenCard