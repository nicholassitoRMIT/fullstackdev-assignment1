import React, { useState } from "react";

const sName = "name"
const sPassword = "password"
const sEmail = "email"
const sUser = "currentUser"
const sDate = "date"

function ChangeName(props){
    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [editName, setEditName] = useState(false)
    const [pwConfimation, setConfirmation] = useState(false)

    function changeEditName(){
        setEditName(!editName)
    }

    function changePWConfirmation(){
        setConfirmation(!pwConfimation)
    }

    function onChangeName(n){
        setName(n.target.value)
    }

    function onChangePassword(p){
        setPassword(p.target.value)
    }

    function cancel(){
        changeEditName()
        setPassword('')
    }

    function vcancel(){
        changeEditName()
        changePWConfirmation()

        setPassword('')
        setName('')
    }

    function verifyPassword(e){
        e.preventDefault()

        if(password === user[sPassword]){
            changePWConfirmation()
        } 
        else {
            alert("Incorrect password!")
        }
    }

    function handleChangeName(e){
        e.preventDefault()

        if(name === ''){
            alert("Please enter a name.")
        }
        else if(name === user[sName]){
            alert("You entered your current name.")
        }
        else{
            localStorage.setItem(user[sEmail], JSON.stringify({
                name : name, 
                password : user[sPassword],
                date : user[sDate]
            }))

            localStorage.setItem(sUser, JSON.stringify({
                email : user[sEmail],
                name : name, 
                password : user[sPassword],
                date : user[sDate]
            }))

            alert("Successfully changed name!")
            props.setCurrentName(name)
            vcancel()
        }
    }

    return(
        <div>
            {editName ? 
                <>
                {pwConfimation ? 
                    <>
                    <form onSubmit={handleChangeName}>
                        <p>Enter new name:</p>
                        <input type='text' className="input-field" value={name} onChange={onChangeName} placeholder="New name"/>

                        <div className="button-box">
                            <button className="input-submit" type='submit'>Change name</button>
                        </div>

                        <div className="button-box">
                            <button className="input-submit" onClick={vcancel}>Cancel</button>
                        </div>
                    </form>
                    </>
                    :
                    <>
                    <form onSubmit={verifyPassword}>
                        <p>You must verify your password before you can change your name.</p>
                    <input type='password' className="input-field" value={password} onChange={onChangePassword} placeholder="Password"/>

                    <div className="button-box">
                        <button className="input-submit" type='submit'>Confirm password</button>
                    </div>

                    <div className="button-box">
                        <button className="input-submit" onClick={cancel}>Cancel</button>
                    </div>
                </form>
                </>
            }
            </>
            : 
            <>
                <div>
                    <button className="input-submit" onClick={changeEditName}>Change name</button>
                </div>
            </>
            }
        </div>
    )
}

export default ChangeName