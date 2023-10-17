import React from "react"
import { useNavigate } from "react-router-dom"

const sUser = "currentUser"

function LogOut(props){
    //Component for the log out button.
    //Asks for confirmation before logging the user out.
    const changePage = useNavigate()

    function logOut(){
        if (window.confirm("Are you sure you want to log out?")){
            //Upon confirmation, removes the currentUser item from localStorage 
            //and redirects the user to the homepage.
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