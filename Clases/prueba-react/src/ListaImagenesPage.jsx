import ListaImagenes from "./ListaImagenes"

const ListaImagenesPage=()=>{
    const listaImagenes = [
        {
            url: "https://www.logotypes101.com/logos/337/E359C9479CC60F53853597C5C850D693/logo_universidad_de_lima_vectores.png",
            title: "Titulo 1"
        },
        {
            url: "https://www.logotypes101.com/logos/337/E359C9479CC60F53853597C5C850D693/logo_universidad_de_lima_vectores.png",
            title: "Titulo 2ds"
        },
        {
            url: "https://www.logotypes101.com/logos/337/E359C9479CC60F53853597C5C850D693/logo_universidad_de_lima_vectores.png",
            title: "Titulo 3awfaw"
        },
    ]
    return <div>
        <h1>Listado de Imagenes</h1>    
        <ListaImagenes ListaImagenes = {listaImagenes} />
    </div>
}
export default ListaImagenesPage