import React from "react";
import About from "./About";
import Files from "./Files";
import "./Navbar.css"



function NavBar() {
    return(
        <nav>
            <ul>
                <li className="Knapper"> Home </li>
                <li className="Knapper"> about </li>
                <li className="Knapper"> Contact</li>
                <li className="KnapperHøyre"> Upload </li>
            </ul>
        </nav>
    );

}

export default NavBar;