import { useState } from "react"
import { Hijo } from "./Hijo"
import { ItemCount } from "./ItemCount"


export const ItemDetail = ( { listaProductos} ) => { 
    

    const [ stock, setStock ]  = useState(7)
    
    const onAdd = (contador) => {
        
        if ( stock >= contador) {
            setStock( stock - contador )
        }else  setStock( 'Sin stock')

    }



    if(listaProductos){
        return (
            <>
                <article className="cardDetailContainer">
                    <div className="img"> { listaProductos.img }</div>
                    <h3> {listaProductos.name} </h3>
                    <p> {listaProductos.detalle} </p>
                    <p>En stock :   {stock}</p>
                    <ItemCount productoName={ listaProductos.name } onAdd={onAdd} inicio={1} stockInicial={stock}/>
                </article>
            </>
        )
    }else{
        return <></>
    }



    // if( !confirmado ) {
    //     return (
    //         <>
    //             <div className="itemCountContainer">
    //                 <p>En stock :   {stock}</p>
    //                 <div className="countContainer">
    //                     <button onClick={ restar } >-</button>
    //                     <p>  {contador}</p>
    //                     <button onClick={ sumar } >+</button>
    //                 </div>
    //                 <div className='botonComprar'>
    //                     <button onClick={ comprar }  > Comprar</button>
    //                 </div>
    //             </div>
    //         </>
    //     )

    // }else{
    //     if( reConfirmar ){
    //         return (
    //             <>
    //                 <div className="modal">
    //                     <div className="contenedorDentroModal">
    //                         <h2>cantidad seleccionada : <br />{compra}</h2>
    //                         <p>En stock { stock }</p>
    //                         <button onClick={ volver } className="buttonClose"  > Volver </button>
    //                         <button onClick={ confirmar } className="buttonClose"  > Confirmar </button>
    //                     </div>
    //                 </div>
    //             </>
    //         )

    //     }else {
    //         return(
    //             <>
    //                 <div className="modal">
    //                     <div className="contenedorDentroModal">
    //                         <h3> {productoName} </h3>
    //                         <p> compro : <br />{compra}</p>
    //                         <button onClick={ cerrar } className="buttonClose"  > Cerrar </button>
    //                     </div>
    //                 </div>
    //             </>
    //         )
    //     }
    // }






}

