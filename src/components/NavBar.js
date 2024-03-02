
import "./NavBar.css";
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png";

function Navbar() {

    return (

        <nav className="navbar">
            <Link to="/">
                <img src={Logo} alt="logo" style={{ width: 150 }} />
            </Link>
            <ul className="navbar-links">


                <li ><Link to="/Home">Home </Link></li>
                <li><Link to="/Businesses">Businesses </Link></li>
                <li ><Link to="/Charities">Charities</Link></li>
                <li ><Link to="/Resources">Resources</Link></li>


            </ul>
        </nav>
    );

}

export default Navbar;