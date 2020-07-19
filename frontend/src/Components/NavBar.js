import React from "react";
import About from "./About";
import Files from "./Files";
import "./Navbar.css"
import {Link} from "react-router-dom";


function NavBar() {
    return(
        <nav>
            <ul>
                <Link to="/">
                    <li className="Logo"> Home </li>
                </Link>
                <Link to="/About">
                    <li className="Knapper"> About </li>
                </Link>
                <Link to="/Contact">
                    <li className="Knapper"> Contact</li>
                </Link>
                <Link to="Files">
                    <li className="KnapperHøyre"> Upload </li>
                </Link>
            </ul>
        </nav>
    );

}

export default NavBar;