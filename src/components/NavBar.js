
import "./NavBar.css";
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png";

function Navbar() {

    return (

        <nav className="navbar">
                <img src={Logo} alt="logo" style={{ width: 150 }} />

            <ul className="navbar-links">


                <li ><Link to="/home">Home </Link></li>

                <li><Link to="/balance">Restaurants </Link></li>

                <li ><Link to="/loan">Charities</Link></li>
                <li ><Link to="/resources">Resources</Link></li>


            </ul>
        </nav>
    );

}

export default Navbar;