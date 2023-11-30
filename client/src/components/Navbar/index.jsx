import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to = "/"><button>Home</button></Link>
                <Link to = "/create"><button>Create movie</button></Link>
            </ul>
        </nav>
    )
}

export default Navbar;