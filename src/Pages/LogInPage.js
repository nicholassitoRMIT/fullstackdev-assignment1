import React from "react"
import LogIn from "./Components/LogIn"

function LogInPage(props){
    return(
        <div className="page">
            <h1>Log in</h1>
            <LogIn setHasUser = {props.setHasUser}/>
        </div>
    )
}

export default LogInPage