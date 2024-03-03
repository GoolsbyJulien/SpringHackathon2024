
import "./NavBar.css";
import { Link } from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../img/logo.png";

function Navbar() {

    return (

        <nav className="navbar">
            <Link to="/">
                <img src={Logo} alt="logo" style={{ width: 100 }} />
            </Link>
            <h1>Show-Me Cupboard</h1>
            <ul className="navbar-links">


                <li ><Link to="/Home" style={{color: "white"}}>Home </Link></li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant='success' style={{color: "white", background: "#4a8559"}}>Businesses</Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item as={Link} to="/">Find a Charity</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/TaxCalculator">Tax Deduction Calculator</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/WhyDonate">Why Donate?</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li >
                    <Dropdown>
                        <Dropdown.Toggle variant='success' style={{color: "white", background: "#4a8559"}}>Charities</Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item as={Link} to="/Charities">Join Our Cause!</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li ><Link to="/Resources"style={{color: "white"}}>Resources</Link></li>


            </ul>
        </nav>
    );

}

export default Navbar;