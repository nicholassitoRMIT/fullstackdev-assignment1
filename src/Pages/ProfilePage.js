import React from "react"

import LogOut from "./Components/LogOut"
import DeleteAccount from "./Components/DeleteAccount"
import ChangeEmail from "./Components/ChangeEmail"
import ChangeName from "./Components/ChangeName"
import ChangePassword from "./Components/ChangePassword"

function ProfilePage(props){
    return(
        <div className="page">
            <ChangeEmail />
            <ChangeName />
            <ChangePassword />
            <LogOut setHasUser = {props.setHasUser}/>
            <DeleteAccount setHasUser = {props.setHasUser}/>
        </div>
    )
}

export default ProfilePage