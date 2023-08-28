import React from "react"

import LogOut from "./Components/LogOut"

function ProfilePage(props){
    return(
        <div>
            <h1>
                proof of file(wip)
            </h1>
            <LogOut setHasUser = {props.setHasUser}/>
        </div>
    )
}

export default ProfilePage