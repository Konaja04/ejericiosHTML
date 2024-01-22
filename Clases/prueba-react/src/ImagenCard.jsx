
import './ImagenCard.css';
const ImagenCard = (props)=>{

    return <div>
    <div className="estiloCard"> 
        <img src={props.url} className="card-img-top" alt="" />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
        </div>
    </div>
</div>
}
export default ImagenCard