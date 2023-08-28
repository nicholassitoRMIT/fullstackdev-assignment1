import React from "react"

//UNFINISHED

const LogOut = () => {
    function logOut(){
        localStorage.removeItem("currentUser")
    }

    return (
        <div>
            <h1>Log out</h1>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default LogOut