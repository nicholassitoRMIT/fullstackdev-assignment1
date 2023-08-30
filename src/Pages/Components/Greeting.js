import React from "react"

const sUser = "currentUser"
const sName = "name"

function Greeting(props){
    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)

    return (
        <div>
            {props.hasUser ?
            <h1>Welcome, {user[sName]}</h1> :
            <h1>Welcome, guest!</h1>}
        </div>
    )
}

export default Greeting