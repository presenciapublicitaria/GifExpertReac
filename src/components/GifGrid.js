import React  from "react"; //{ useEffect, useState }
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ categoria }) => {

    // const [imagenes, setImagenes] = useState([]);

    const { data:imagenes, loading } = useFetchGifs(categoria);  
    
    return (
        <>
        <h3  className="animate__animated animate__fadeInRight">{ categoria }</h3>

        { loading && <p className="animate__animated animate__flash animate__slower">Cargando ... </p> }

        <div className="card-grid">
                {
                    imagenes.map( img =>(
                        <GifGridItem 
                        key={img.id} 
                        {...img}
                         />
                    ))
                }

        </div >
        </>

    )

}