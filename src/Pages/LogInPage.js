import React from "react"
import LogIn from "./Components/LogIn"

function LogInPage(props){
    return(
        <div>
            <LogIn setHasUser = {props.setHasUser}/>
        </div>
    )
}

export default LogInPage