import React from "react";

const sName = "name"
const sPassword = "password"
const sEmail = "email"

const sDate = "date"

const sUser = "currentUser"

function ProfileInfo(props){
    var user = localStorage.getItem(sUser)

    return(
        <div>
            <h1>My profile</h1>
            <p>Name: {props.currentName}</p>
            <p>Email: {props.currentEmail}</p>
            <p>Joined: {props.dateJoined}</p>
        </div>
    )
}

export default ProfileInfo