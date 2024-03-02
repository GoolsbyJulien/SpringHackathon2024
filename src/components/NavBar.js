
import "./NavBar.css";
import { Link } from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../img/logo.png";

function Navbar() {

    return (

        <nav className="navbar">
            <Link to="/">
                <img src={Logo} alt="logo" style={{ width: 150 }} />
            </Link>
            <ul className="navbar-links">


                <li ><Link to="/Home">Home </Link></li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant='success' style={{color: "black"}}>Businesses</Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item as={Link} to="/">Find a Charity</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/Businesses">Businesses</Dropdown.Item>                            
                            <Dropdown.Item>Tax Deduction Calculator</Dropdown.Item>
                            <Dropdown.Item>Why Donate?</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li >
                    <Dropdown>
                        <Dropdown.Toggle variant='success' style={{color: "black"}}>Charities</Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item as={Link} to="/Charities">Join Our Cause!</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li ><Link to="/Resources">Resources</Link></li>


            </ul>
        </nav>
    );

}

export default Navbar;