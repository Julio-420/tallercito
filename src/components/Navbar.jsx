
import {Link} from "react-router-dom"

const Navbar = () => { 
    return (
        <>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container">
                <Link className="btn btn-outline-primary" to="/">Home</Link>
                <Link className="btn btn-outline-primary" to="/crearempresa">Promo</Link>
                <Link className="btn btn-outline-primary" to="/fortalecertuempresa">About</Link>
                

               
            </div>
        </nav>
        </>
    )
 }
 export default Navbar;