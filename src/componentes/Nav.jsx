
import { Link } from "react-router-dom"



const Nav = () => {

    // console.log(props)
    return(
        <nav className="header__nav">
            <Link to="/" className="nav__link">Productos</Link>
            <Link to='/productos/sabanas'  className="nav__link">Sabanas</Link>
            <Link to='/productos/almohadas'  className="nav__link">Almohadas</Link>
            <Link to='/productos/Electronicos'  className="nav__link">Electronicos</Link>
            <Link to='/productos/Zapatillase'  className="nav__link">Zapatillas</Link>
        </nav>
    )
}
export default Nav