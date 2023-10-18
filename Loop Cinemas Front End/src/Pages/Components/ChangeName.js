import React, { useState } from "react";
import { updateName, confirmPassword } from "../../database/repository";

const sName = "name"
const sPassword = "password"
const sEmail = "email"
const sUser = "currentUser"
const sDate = "date"

function ChangeName(props){
    //Component for changing the user's name.
    //The form works as follows:
    //The user presses the "Change name" button,
    //confirms their password and changes their name.

    //Mechanically, this form works similarly to ChangeEmail and ChangePassword.

    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)

    //Create hooks for the name and password input fields.
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    //Create hooks that determine whether this component should show
    //the "Change name" button, the password confirmation form
    //or the form that actually changes the user's name.

    //editName determines if the component should show the button.
    const [editName, setEditName] = useState(false)
    //pwConfirmation determines if the user should be inputting their password
    //or their new name.
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
        //Cancel
        //If the user cancels the change at password confirmation,
        //only change the form back to the "Change name" button
        //and reset the password field.
        changeEditName()
        setPassword('')
    }

    function vcancel(){
        //V(erified) cancel

        //If the user cancels after verifying their password,
        //change the form back to the button, "unconfirm" the password
        //and reset both the password and new name fields.
        changeEditName()
        changePWConfirmation()

        setPassword('')
        setName('')
    }

    async function verifyPassword(e){
        e.preventDefault()

        //Verifies the user's password.
        //Upon successful verification, the user may enter a new name.

        if(await confirmPassword(password)){
            changePWConfirmation()
        } 
        else {
            alert("Incorrect password!")
        }
    }

    async function handleChangeName(e){
        e.preventDefault()

        //Function that changes the name.

        //There's not many requirements here, only that the input field is not empty
        //and the new name isn't the same as the current one.

        if(name.trim() === ''){
            //If the field is empty, let the user know.
            alert("Please enter a name.")
        }
        else if(name === user[sName]){
            //If the user has entered their current name, let them know.
            alert("You entered your current name.")
        }
        else{
            const user = await updateName(name)

            if(user !== null){
                //Inform the user of the successful change and change the hook 
                //used by another component, namely the one that shows the profile information.
                alert("Successfully changed name!")
                props.setCurrentName(name)

                //I use vcancel here to reset the form.
                vcancel()
            }
            else {
                alert("Username already taken!")
            }
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