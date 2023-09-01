import React from "react";

function ProfileInfo(props){

    return(
        <div>
            <h1>My profile</h1>
            <p>Name: {props.currentName}</p>
            <p>E-mail: {props.currentEmail}</p>
            <p>Joined: {props.dateJoined}</p>
        </div>
    )
}

export default ProfileInfo