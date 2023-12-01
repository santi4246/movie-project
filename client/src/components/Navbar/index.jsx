import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className = "navbar">
            <ul>
                <Link to = "/" className = "navlinks"><button>Home</button></Link>
                <Link to = "/create" className = "navlinks"><button>Create movie</button></Link>
            </ul>
        </nav>
    )
}

export default Navbar;