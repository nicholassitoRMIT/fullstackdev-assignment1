import React, { useState } from "react"

import LogOut from "./Components/LogOut"
import DeleteAccount from "./Components/DeleteAccount"
import ChangeEmail from "./Components/ChangeEmail"
import ChangeName from "./Components/ChangeName"
import ChangePassword from "./Components/ChangePassword"
import ProfileInfo from "./Components/ProfileInfo"

const sUser = "currentUser"
const sName = "username"
const sEmail = "email"
const sDate = "createdAt"

function ProfilePage(props){
    //Profile page.
    //It has 2 hooks to update the displayed profile information 
    //whenever it is updated, which are passed as props to its components.

    //The page uses the ProfileInfo, ChangeName/Email/Password, LogOut and DeleteAccount components.
    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)

    const [currentName, setCurrentName] = useState(user[sName])
    const [currentEmail, setCurrentEmail] = useState(user[sEmail])
    const dateJoined = user[sDate]

    return(
        <div className="page">
            <ProfileInfo currentName = {currentName} currentEmail = {currentEmail} dateJoined = {dateJoined}/>

            <h2>Change details</h2>
            <ChangeEmail setCurrentEmail = {setCurrentEmail}/>
            <ChangeName setCurrentName = {setCurrentName}/>
            <ChangePassword />

            <h2>Log out</h2>
            <LogOut setHasUser = {props.setHasUser}/>

            <h2>Delete account</h2>
            <DeleteAccount setHasUser = {props.setHasUser}/>
        </div>
    )
}

export default ProfilePage