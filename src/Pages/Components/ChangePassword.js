import React, { useState } from "react";
import PasswordRequirement from "./PasswordRequirement";

const sName = "name"
const sPassword = "password"
const sEmail = "email"
const sUser = "currentUser"
const sDate = "date"

function ChangePassword(){
    //Component for changing the user's password.
    //The form works as follows:
    //The user presses the "Change password" button,
    //confirms their current password and changes their password.
    
    //Similarly to signing up, the user must has to follow strong password requirements
    //and confirm their new password(type it twice).

    //Mechanically, this form works similarly to ChangeEmail and ChangeName.

    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)

    //Create hooks for the password fields.
    //password - current password
    //newPassword - new password
    //conPassowrd - confirm new password
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [conPassword, setConPassword] = useState('')

    //Create hooks that determine whether this component should show
    //the "Change password" button, the password confirmation form
    //or the form that actually changes the password, 
    //which includes a new/confirm password field and shows the strong password requirements.

    //editPassword determines if the component should show the button.
    const [editPassword, setEditPassword] = useState(false)
    //pwConfirmation determines if the user should be inputting their current password
    //or their new one.
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
        //Cancel
        //If the user cancels the change at password confirmation,
        //only change the form back to the "Change password" button
        //and reset the current password field.
        changeEditPassword()
        setPassword('')
    }

    function vcancel(){
        //V(erified) cancel

        //If the user cancels after verifying their current password,
        //change the form back to the button, "unconfirm" the current password
        //and reset all password fields.
        changeEditPassword()
        changePWConfirmation()
        
        setPassword('')
        setNewPassword('')
        setConPassword('')
    }

    function verifyPassword(e){
        e.preventDefault()

        //Verifies the user's current password.
        //Upon successful verification, the user may enter a new password.

        if(password === user[sPassword]){
            changePWConfirmation()
        } 
        else {
            alert("Incorrect password!")
        }
    }

    function handleChangePassword(e){
        e.preventDefault()

        /*Function that actually changes the user's password.
        The new password must meet the following requirements:
        - Both the new password and confirm password fields must not be empty.
        - The new password cannot be the same as the current one.
        - The new password must meet the strong password requirements.
        - New password and confirm password must be the same.*/

        if(newPassword === '' || conPassword === ''){
            //If a field is empty, let the user know.
            alert("Please enter new password and confirm password.")
        }
        else if(newPassword === user[sPassword]){
            //If the new password is the same as the current one, let the user know.
            alert("You entered your current password.")
        }
        else if(strongPasswordCheck() === false){
            //If the new password is not strong, let the user know.
            alert("New password doesn't meet the requirements!")
        }
        else if(newPassword !== conPassword){
            //If new password and confirm password do not match, let the user know.
            alert("New password and confirm password do not match!")
        }
        else{
            //If all requirements are met, update the localStorage items for the profile and currentUser.
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

            //Inform the user of successful password change.
            //Since we're not showing the password, we don't need to update any hooks.
            alert("Successfully changed password!")

            //Vcancel to reset the form.
            vcancel()
        }
    }

    function strongPasswordCheck(){
        //This function is the same as the one in the SignUp component.

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