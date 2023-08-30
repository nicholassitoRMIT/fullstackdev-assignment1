import React from "react"
import { useNavigate } from "react-router-dom"

const sUser = "currentUser"

function LogOut(props){
    const changePage = useNavigate()

    function logOut(){
        if (window.confirm("Are you sure you want to log out?")){
            localStorage.removeItem(sUser)
            props.setHasUser(false)
            changePage('/')
        }
    }

    return (
        <div>
            <button className="input-submit" onClick={logOut}>Log out</button>
        </div>
    )
}

export default LogOut