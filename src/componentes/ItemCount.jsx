
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const ItemCount = ( {productoName} ) => {

    const [ stock, setStock ] = useState( 5 )
    const [ contador, setContador] = useState( 1 )
    const [ compra, setCompra] = useState(0)
    const [ confirmado, setConfirmado] = useState( false )
    const [ reConfirmar, setReConfirmar] = useState( true )
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

    const comprar = () => {
        if ( stock >= contador) {
            setContador( 1 ) 
            setCompra( contador )
            setConfirmado( true )
        }else  setContador( 'Sin stock')
    }

const volver = () => {
    setConfirmado( confirmado )
    navigate( `/` ) 
}

const confirmar = () => {
    setStock( stock - contador)
    setReConfirmar( false )
}

const cerrar = () => {
    setConfirmado( confirmado )
    navigate( `/` ) 
}

    if( !confirmado ) {
        return (
            <>
                <div className="itemCountContainer">
                    <p>En stock :   {stock}</p>
                    <div className="countContainer">
                        <button onClick={ restar } >-</button>
                        <p>  {contador}</p>
                        <button onClick={ sumar } >+</button>
                    </div>
                    <div className='botonComprar'>
                        <button onClick={ comprar }  > Comprar</button>
                    </div>
                </div>
            </>
        )

    }else{
        if( reConfirmar ){
            return (
                <>
                    <div className="modal">
                        <div className="contenedorDentroModal">
                            <h2>cantidad seleccionada : <br />{compra}</h2>
                            <p>En stock { stock }</p>
                            <button onClick={ volver } className="buttonClose"  > Volver </button>
                            <button onClick={ confirmar } className="buttonClose"  > Confirmar </button>
                        </div>
                    </div>
                </>
            )

        }else {
            return(
                <>
                    <div className="modal">
                        <div className="contenedorDentroModal">
                            <h3> {productoName} </h3>
                            <p> compro : <br />{compra}</p>
                            <button onClick={ cerrar } className="buttonClose"  > Cerrar </button>
                        </div>
                    </div>
                </>
            )
        }
    }
}