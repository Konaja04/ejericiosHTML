
import ImagenCard from "./ImagenCard"

const ListaImagenes = (props) =>{
    // const ListaImagenes = [
    //     {
    //         url: "https://www.logotypes101.com/logos/337/E359C9479CC60F53853597C5C850D693/logo_universidad_de_lima_vectores.png",
    //         title: "Titulo 1"
    //     },
    //     {
    //         url: "https://www.logotypes101.com/logos/337/E359C9479CC60F53853597C5C850D693/logo_universidad_de_lima_vectores.png",
    //         title: "Titulo 2ds"
    //     },
    //     {
    //         url: "https://www.logotypes101.com/logos/337/E359C9479CC60F53853597C5C850D693/logo_universidad_de_lima_vectores.png",
    //         title: "Titulo 3awfaw"
    //     },
    // ]
    console.log(props);
    return <div>
        {
            props.ListaImagenes.map((image)=>(
                <ImagenCard url = {image.url} title ={image.title}/>
            ))
        }
    </div>
}
export default ListaImagenes