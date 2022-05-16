
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"


export const ItemCount = ( {onAdd , inicio, stockInicial} ) => {

    const [ stock, setStock ] = useState( stockInicial )
    const [ contador, setContador] = useState( inicio )
    const [ compra, setCompra] = useState(0)
    const [ confirmado, setConfirmado] = useState( false )
    // const [ reConfirmar, setReConfirmar] = useState( true )
    const navigate = useNavigate()


    const restar = () =>{
        if ( contador > 1 ){
            setContador( contador - 1)
        }
    }

    const sumar = () =>{
        if ( contador <  stock ) {
            setContador( contador + 1) 
        }
    }

    const agregar = () => {
        if ( stock >= contador) {
            setCompra( contador )
            setStock( stock - contador)
            setContador(1)
            onAdd(contador)
            // navigate('/carrito')

        }else  setContador( 'Sin stock')

    }

// const volver = () => {
//     setConfirmado( confirmado )
//     navigate( `/` ) 
// }

// const confirmar = () => {
//     setStock( stock - contador)
//     // setReConfirmar( false )
// }

// const cerrar = () => {
//     setConfirmado( confirmado )
//     navigate( `/` ) 
// }

        return (
            <>
                <div className="itemCountContainer">
                    <div className="countContainer">
                        <button onClick={ restar } >-</button>
                        <p>  {contador}</p>
                        <button onClick={ sumar } >+</button>
                    </div>
                    <div className='botonComprar'>
                        <button onClick={ agregar }  > Agregar a carrito</button>
                    </div>
                </div>
            </>
        )

}