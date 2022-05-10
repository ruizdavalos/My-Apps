

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import { baseDeTodos } from "./ItemListContainer"

// const baseDeTodos = [
//     {
//         id: 0,
//         name: 'Sabana Arte Blanco ',
//         img: <img src="https://i.ibb.co/NmLWg8v/SABANAS.jpg" alt="SABANAS" border="0" />,
//         price: 100,
//         detalle:  ' Sábanas Algodón Egipcio 100% 300 Hilos Importadas ARG'
//     },
//     {
//         id: 1,
//         name: 'Sabana M&H',
//         img: <img src="https://i.ibb.co/NmLWg8v/SABANAS.jpg" alt="jk-company" border="0" />,
//         price: 999,
//         detalle: ' Sábanas Algodón Egipcio 100% 300 Hilos Importadas USA'
//     },
//     {
//         id: 2,
//         name: 'Sabana Arte Blanco ',
//         img: <img src="https://i.ibb.co/NmLWg8v/SABANAS.jpg" alt="SABANAS" border="0" />,
//         price: 1599,
//         detalle:  ' Sábanas Algodón Egipcio 100% 300 Hilos Importadas ARG'
//     }, {
//         id: 3,
//         name: 'Almohada Elite Hotel ',
//         img: <img src="https://i.ibb.co/fNzWHZ7/D-NQ-NP-665228-MLA40832448328-022020-O.webp" alt="SABANAS" border="0" />,
//         price: 100,
//         detalle:  'La almohada Elite Hotel Synthetic Duvet está elaborada con delicadas fibras cardadas, que confieren una máxima resiliencia y durabilidad'
//     },
//     {
//         id: 4,
//         name: 'Almohada Pierre Cardin',
//         img: <img src="https://i.ibb.co/Y2pMbMs/D-NQ-NP-761973-MLA43388063535-092020-O.webp" alt="jk-company" border="0" />,
//         price: 999,
//         detalle: ' Una almohada de excelente calidad, no se deforma! Las imágenes son de carácter ilustrativo.'
//     },
//     {
//         id: 5,
//         name: 'Almohada Confort ',
//         img: <img src="https://i.ibb.co/fNzWHZ7/D-NQ-NP-665228-MLA40832448328-022020-O.webp" alt="SABANAS" border="0" />,
//         price: 1599,
//         detalle:  ' ALMOHADA INTELIGENTE CON MEMORIA VISCOELASTICA  Con canales de ventilación: Elimina olores y se preserva mas fresca.'
//     }
// ]
// const baseDeSabanas = [
//     {
//         id: 0,
//         name: 'Sabana Arte Blanco ',
//         img: <img src="https://i.ibb.co/NmLWg8v/SABANAS.jpg" alt="SABANAS" border="0" />,
//         price: 100,
//         detalle:  ' Sábanas Algodón Egipcio 100% 300 Hilos Importadas ARG'
//     },
//     {
//         id: 1,
//         name: 'Sabana M&H',
//         img: <img src="https://i.ibb.co/NmLWg8v/SABANAS.jpg" alt="jk-company" border="0" />,
//         price: 999,
//         detalle: ' Sábanas Algodón Egipcio 100% 300 Hilos Importadas USA'
//     },
//     {
//         id: 2,
//         name: 'Sabana Arte Blanco ',
//         img: <img src="https://i.ibb.co/NmLWg8v/SABANAS.jpg" alt="SABANAS" border="0" />,
//         price: 1599,
//         detalle:  ' Sábanas Algodón Egipcio 100% 300 Hilos Importadas ARG'
//     }
// ]
// const baseDeAlmohadas = [
//     {
//         id: 0,
//         name: 'Almohada Elite Hotel ',
//         img: <img src="https://i.ibb.co/fNzWHZ7/D-NQ-NP-665228-MLA40832448328-022020-O.webp" alt="SABANAS" border="0" />,
//         price: 100,
//         detalle:  'La almohada Elite Hotel Synthetic Duvet está elaborada con delicadas fibras cardadas, que confieren una máxima resiliencia y durabilidad'
//     },
//     {
//         id: 1,
//         name: 'Almohada Pierre Cardin',
//         img: <img src="https://i.ibb.co/Y2pMbMs/D-NQ-NP-761973-MLA43388063535-092020-O.webp" alt="jk-company" border="0" />,
//         price: 999,
//         detalle: ' Una almohada de excelente calidad, no se deforma! Las imágenes son de carácter ilustrativo.'
//     },
//     {
//         id: 2,
//         name: 'Almohada Confort ',
//         img: <img src="https://i.ibb.co/fNzWHZ7/D-NQ-NP-665228-MLA40832448328-022020-O.webp" alt="SABANAS" border="0" />,
//         price: 1599,
//         detalle:  ' ALMOHADA INTELIGENTE CON MEMORIA VISCOELASTICA  Con canales de ventilación: Elimina olores y se preserva mas fresca.'
//     }
// ]

export const ItemDetailContainer  = () => {


    const [ listaProductos , setListaProductos] = useState( {})
    const [ cargando, setCargando ] = useState('')
    const { id } = useParams()

    useEffect( () => {

        const pedido = new Promise( ( res ) => {
            setCargando( 'Cargando...')
            setTimeout( () =>{
                res( baseDeTodos )
            },2000)
        })
        pedido.then( () => {
                console.log( ' Productos recibidos ')
                setListaProductos(baseDeTodos[id] )
                setCargando('')
        }).catch( ( err ) => {
            console.log( err)
        })
    },[id])

    if( cargando) {
        return(
            <>
                <p>{cargando}</p>
            </>
        )
    }else{
        return (
            <ItemDetail listaProductos={ listaProductos }/>
        )
    }
}