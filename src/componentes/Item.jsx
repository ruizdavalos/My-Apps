
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ItemDetailContainer } from "./ItemDetailContainer"


export const Item = ( {id, name, img, price, listaProducto } ) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate( `/producto/${id}` ) 
    }

        return (
            <>
                <article className="cardProductContainer">
                    <h3> {name} </h3>
                    <div className="img"> { img }</div>
                    <p>Precio :  { price }</p>
                    <button className="button" onClick={ handleClick }  >Detalle</button>
                    {/* <Link to={`/productos/:${id}`} >Ver mas</Link> */}
                </article>
            </>
        )
}


