import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
        </nav>       
    );
}

export default Navbar;