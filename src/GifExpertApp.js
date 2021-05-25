import React, { useState } from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['Samurai X'])
    
    // const handleAdd = () =>{
    //     // setCategorias( [...categorias, 'HunterxHunter'] );
    //     setCategorias( cate => [...cate, 'HunterxHunter' ] );
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategoria setCategorias={ setCategorias } />
            
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}



            <ol>
                {
                    categorias.map( (categoria) => {
                        // return <li key={ categoria } > { categoria } </li>
                        // return <li key={ categoria } > { categoria } </li>
                        return <GifGrid 
                            key= { categoria }
                            categoria = { categoria } 
                        />
                    })
                }
            </ol>

        </>
    )


}

