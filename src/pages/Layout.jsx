import React from "react";
import {Outlet} from "react-router-dom";
//import Navbar from "../navbar";

const Layout = () => {
    return(
        <div id="pageContainer">
            <Outlet id="outlet"/>
        </div>
    );
};

export default Layout;