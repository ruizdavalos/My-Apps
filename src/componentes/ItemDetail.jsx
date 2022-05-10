import { Hijo } from "./Hijo"
import { ItemCount } from "./ItemCount"


export const ItemDetail = ( { listaProductos} ) => { 

    const clickPadre = () => {
        console.log( 'Padre' )
    }


    // const handleClick = ( e ) => {
    //     //e.preventDefault()
    //     //e.stopPropagation()
    // console.log( e.target.value , 'Click')
    // }

    // const handleChange = ( e ) => {
    //     console.log( e.target.name)    //type
    // }

    // const handleFocus = ( e ) => {
    //     console.log( 'Focus' )
    // }

    // const handleBlur = ( e ) => {
    //     console.log( 'Blur' )
    // }

    
    // const handleSubmit = ( e ) => {
    //     e.preventDefault()
    //     console.log( 'Submit' )
    // }

    if(listaProductos){
        return (
            <>
                <article className="cardDetailContainer">
                    <div className="img"> { listaProductos.img }</div>
                    <h3> {listaProductos.name} </h3>
                    <p> {listaProductos.detalle} </p>
                    <ItemCount productoName={ listaProductos.name }/>
                </article>
            </>
        )
    }else{
        return <></>
    }
}

