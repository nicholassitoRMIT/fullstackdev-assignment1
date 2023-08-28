import React from "react"
import { useNavigate } from "react-router-dom"

//UNFINISHED
const sUser = "currentUser"

function LogOut(props){
    const changePage = useNavigate()

    function logOut(){
        localStorage.removeItem(sUser)
        props.setHasUser(false)
        changePage('/')
    }

    return (
        <div>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default LogOut