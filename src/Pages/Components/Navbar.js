import React from "react"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
                <div>
                    < Link to="/" className="navbar-left">Home</Link>
                    < Link to="/movies" className="navbar-left">Movies</Link>
                </div>
                <div>
                    < Link to="/" className="navbar-center">LOOP CINEMAS</Link>
                </div>
                <div>
                    < Link to="/log-in" className="navbar-right">Log in</Link>
                    < Link to="/sign-up" className="navbar-right">Sign up</Link>
                </div>
        </div>
    )
}

export default Navbar;