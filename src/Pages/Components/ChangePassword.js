import React, { useState } from "react";
import PasswordRequirement from "./PasswordRequirement";

const sName = "name"
const sPassword = "password"
const sEmail = "email"
const sUser = "currentUser"
const sDate = "date"

function ChangePassword(){
    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)

    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [conPassword, setConPassword] = useState('')

    const [editPassword, setEditPassword] = useState(false)
    const [pwConfimation, setConfirmation] = useState(false)

    function changeEditPassword(){
        setEditPassword(!editPassword)
    }

    function changePWConfirmation(){
        setConfirmation(!pwConfimation)
    }

    function onChangePassword(p){
        setPassword(p.target.value)
    }

    function onChangeNewPassword(p){
        setNewPassword(p.target.value)
    }

    function onChangeConPassword(p){
        setConPassword(p.target.value)
    }

    function cancel(){
        changeEditPassword()
        setPassword('')
    }

    function vcancel(){
        changeEditPassword()
        changePWConfirmation()
        
        setPassword('')
        setNewPassword('')
        setConPassword('')
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

    function handleChangePassword(e){
        e.preventDefault()

        if(newPassword === '' || conPassword === ''){
            alert("Please enter new password and confirm password.")
        }
        else if(newPassword === user[sPassword]){
            alert("You entered your current password.")
        }
        else if(strongPasswordCheck() === false){
            alert("New password doesn't meet the requirements!")
        }
        else if(newPassword !== conPassword){
            alert("New password and confirm password do not match!")
        }
        else{
            localStorage.setItem(user[sEmail], JSON.stringify({
                name : user[sName], 
                password : newPassword,
                date : user[sDate]
            }))

            localStorage.setItem(sUser, JSON.stringify({
                email : user[sEmail],
                name : user[sName], 
                password : newPassword,
                date : user[sDate]
            }))

            alert("Successfully changed password!")

            vcancel()
        }
    }

    function strongPasswordCheck(){
        //Validates if the password is strong.
        //The password must be 8+ characters long
        //and must include at least one of the following:
        //lowercase letter,
        //uppercase letter,
        //a number/digit
        //and a special character.

        //Currently, if the password doesn't meet the requirements, it doesn't show why.

        var goodLength = false
        var hasLowercase = false
        var hasUppercase = false
        var hasSpecial = false
        var hasNumeric = false

        //check length
        if (newPassword.length >= 8){
            goodLength = true
        }

        //this regular expression is from https://stackoverflow.com/questions/32311081/check-for-special-characters-in-string
        var specialChars = /[!-/:-@[-`{-~]/;

        //iterate over the password string, checking if it meets the requirements stated above.
        for(var i = 0; i < newPassword.length; i++){
            var ch = newPassword[i] 

            if(isNaN(ch)){
                if(specialChars.test(ch)){
                    hasSpecial = true
                } 
                else {
                    if(ch === ch.toLowerCase()){
                        hasLowercase = true
                    } else {
                        hasUppercase = true
                    }
                }
            } 
            else {
                hasNumeric = true
            }
        }

        return (goodLength && hasLowercase && hasUppercase && hasNumeric && hasSpecial)
    }

    return (
        <div>
            <h2>Change password</h2>
            {editPassword ? 
                <>
                {pwConfimation ? 
                    <>
                    <form onSubmit={handleChangePassword}>
                        <p>Enter new password:</p>
                        <input type='password' className="input-field" value={newPassword} onChange={onChangeNewPassword} placeholder="New password"/>
                        <input type='password' className="input-field" value={conPassword} onChange={onChangeConPassword} placeholder="Confirm password"/>

                        <div className="button-box">
                            <button className="input-submit" type='submit'>Change password</button>
                        </div>

                        <div className="button-box">
                            <button className="input-submit" onClick={vcancel}>Cancel</button>
                        </div>

                        <PasswordRequirement />
                    </form>
                    </>
                    :
                    <>
                    <form onSubmit={verifyPassword}>
                        <p>You must verify your current password before you can change it.</p>
                        <input type='password' className="input-field" value={password} onChange={onChangePassword} placeholder="Current password"/>

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
                        <button className="input-submit" onClick={cancel}>Change password</button>
                    </div>
                </>
            }
        </div>
    )
}

export default ChangePassword