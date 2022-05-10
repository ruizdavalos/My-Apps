

export const Hijo = ( { clickPadre } ) => {

    const hijoClick = () => {
        clickPadre()
        console.log( 'clickHijo')
    }

    return(
        <>
            <p>Hijo</p>
            <button onClick={ hijoClick } >clickHijo</button>
        </>

    )
}