import React from "react"
import LogIn from "./Components/LogIn"

function LogInPage(props){
    //Log in page. Uses the LogIn component.
    return(
        <div className="page">
            <h1>Log in</h1>
            <LogIn setHasUser = {props.setHasUser}/>
        </div>
    )
}

export default LogInPage