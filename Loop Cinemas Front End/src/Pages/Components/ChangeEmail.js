import React, { useState } from "react";

const sName = "name"
const sPassword = "password"
const sEmail = "email"
const sUser = "currentUser"
const sDate = "date"

function ChangeEmail(props){
    //Component for changing the user's email.
    //The form works as follows:
    //The user presses the "Change e-mail" button,
    //confirms their password and changes their email.

    //Mechanically, this form works similarly to ChangeName and ChangePassword.

    //Also I apologise for using e-mail and email interchangeably, I hope it's not irritating.

    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)

    //Create hooks for the email and password input fields.
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Create hooks that determine whether this component should show
    //the "Change e-mail" button, the password confirmation form
    //or the form that actually changes the e-mail.

    //editEmail determines if the component should show the button.
    const [editEmail, setEditEmail] = useState(false)
    //pwConfirmation determines if the user should be inputting their password
    //or their new e-mail address.
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
        //Cancel
        //If the user cancels the change at password confirmation,
        //only change the form back to the "Change e-mail" button
        //and reset the password field.
        changeEditEmail()
        setPassword('')
    }

    function vcancel(){
        //V(erified) cancel

        //If the user cancels after verifying their password,
        //change the form back to the button, "unconfirm" the password
        //and reset both the password and new e-mail fields.
        changeEditEmail()
        changePWConfirmation()

        setPassword('')
        setEmail('')
    }

    function handleChangeEmail(e){
        e.preventDefault()

        /*Function that actually changes the user's email.
        Before the e-mail can be changed, we must make sure the following requirements are met:
        -The input field is not empty
        -The email is not the same as the user's current one
        -The email is not used by another account
        -The email is in the correct format */
        

        if(email.trim() === ''){
            //The field is empty, let the user know.
            alert("Please enter an e-mail.")
        }
        else if(email === user[sEmail]){
            //If the user inputs the same email as their current one, let them know.
            alert("You entered your current e-mail.")
        }
        else if(localStorage.getItem(email) !== null){
            //If the new e-mail is already in use, let the user know.
            alert("E-mail is already in use!")
        }
        else if(validEmail() === false){
            //If the new e-mail is not in proper format, let the user know.
            alert("Invalid e-mail!")
        }
        else{
            //Profiles are stored in localStorage using the e-mail as the key, so to change it
            //we must essentially "delete" the original profile and recreate it with the new e-mail.
            localStorage.removeItem(user[sEmail])

            localStorage.setItem(email, JSON.stringify({
                name : user[sName], 
                password : user[sPassword],
                date : user[sDate]
            }))

            //In addition, change the current user in localStorage as well.
            localStorage.setItem(sUser, JSON.stringify({
                email : email,
                name : user[sName], 
                password : user[sPassword],
                date : user[sDate]
            }))

            //Inform the user of the successful change and change the hook 
            //used by another component, namely the one that shows the profile information.
            alert("Successfully changed e-mail!")
            props.setCurrentEmail(email)

            //I use vcancel here to reset the form.
            vcancel()
        }
    }

    function validEmail(){
        //This function is the same as the one in the SignUp component.

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

        //Verifies the user's password.
        //Upon successful verification, the user may enter a new e-mail address.

        if(password === user[sPassword]){
            changePWConfirmation()
        } 
        else {
            alert("Incorrect password!")
        }
    }

    return(
        <div>
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
                        <button className="input-submit" onClick={changeEditEmail}>Change e-mail</button>
                    </div>
                </>
            }
        </div>
    )
}

export default ChangeEmail