

import { Logo } from "../base/Logo"
import { CartWidget } from "./CartWidget"
import Nav from "./Nav"
import { Link } from "react-router-dom"

const Header =  () => {
    return (
        <header className="header">
            <Link to='/'><Logo className='hola' nombre='Luis'/></Link> 
            <Link to='/'><Nav  className='hola' nombre='Luis' /></Link>
            <Link to='/carrito'><CartWidget/></Link>
        </header>
    )
}
export default Header

