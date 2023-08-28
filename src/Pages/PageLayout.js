import React from "react"
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

//This is technically not a page, but the component that works with BrowserRouter to render each pages with the navbar on top.
function Layout(props){
    
    return(
        <div>
            < Navbar hasUser = {props.hasUser}/>
            < Outlet/>
            < Footer/>
        </div>
    )
}

export default Layout;