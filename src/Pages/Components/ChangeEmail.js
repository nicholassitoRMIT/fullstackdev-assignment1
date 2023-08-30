import React, { useState } from "react";

const sName = "name"
const sPassword = "password"
const sEmail = "email"
const sUser = "currentUser"
const sDate = "date"

function ChangeEmail(){
    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [editEmail, setEditEmail] = useState(false)
    const [pwConfimation, setConfirmation] = useState(false)

    function changeEditEmail(){
        setEditEmail(!editEmail)
    }

    function changePWConfirmation(){
        setConfirmation(!pwConfimation)
    }

    function onChangeEmail(e){
        setEmail(e.target.value)
    }

    function onChangePassword(p){
        setPassword(p.target.value)
    }

    function cancel(){
        changeEditEmail()
        setPassword('')
    }

    function vcancel(){
        changeEditEmail()
        changePWConfirmation()

        setPassword('')
        setEmail('')
    }

    function handleChangeEmail(e){
        e.preventDefault()

        if(email === ''){
            alert("Please enter an e-mail.")
        }
        else if(email === user[sEmail]){
            alert("You entered your current e-mail.")
        }
        else if(localStorage.getItem(email) !== null){
            alert("E-mail is already in use!")
        }
        else if(validEmail() === false){
            alert("Invalid e-mail!")
        }
        else{
            localStorage.removeItem(user[sEmail])

            localStorage.setItem(email, JSON.stringify({
                name : user[sName], 
                password : user[sPassword],
                date : user[sDate]
            }))

            localStorage.setItem(sUser, JSON.stringify({
                email : email,
                name : user[sName], 
                password : user[sPassword],
                date : user[sDate]
            }))

            alert("Successfully changed e-mail!")

            vcancel()
        }
    }

    function validEmail(){
        //Checks if the e-mail is in the correct format

        //code referenced from https://www.tutorialspoint.com/How-to-validate-email-address-in-JavaScript
        var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat)){
            return true;
        }
        else {
            return false;
        }
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

    return(
        <div>
            <h2>E-mail</h2>
            {editEmail ? 
                <>
                {pwConfimation ? 
                    <>
                    <form onSubmit={handleChangeEmail}>
                        <p>Enter new e-mail:</p>
                        <input type='text' className="input-field" value={email} onChange={onChangeEmail} placeholder="New e-mail"/>

                        <div className="button-box">
                            <button className="input-submit" type='submit'>Change e-mail</button>
                        </div>

                        <div className="button-box">
                            <button className="input-submit" onClick={vcancel}>Cancel</button>
                        </div>
                    </form>
                    </>
                    :
                    <>
                    <form onSubmit={verifyPassword}>
                        <p>You must verify your password before you can change your e-mail.</p>
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
                        <p>{user[sEmail]}</p>
                    </div>
                    <div>
                        <button className="input-submit" onClick={changeEditEmail}>Change e-mail</button>
                    </div>
                </>
            }
        </div>
    )
}

export default ChangeEmail