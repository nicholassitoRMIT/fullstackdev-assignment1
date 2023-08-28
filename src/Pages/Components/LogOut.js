import React from "react"
import { useNavigate } from "react-router-dom"

//UNFINISHED
const sUser = "currentUser"

function LogOut(props){

    function logOut(){
        localStorage.removeItem(sUser)
        props.setHasUser(false)
    }

    return (
            <button onClick={logOut}>Log out</button>
    )
}

export default LogOut