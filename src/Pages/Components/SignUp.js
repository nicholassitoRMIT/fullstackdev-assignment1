import React, { useState } from "react";

const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conpassword, setConPassword] = useState('')

    function registerUser(e){
        e.preventDefault()
        //Registers the user in local storage. 
        //The users are stored in this format:
        //{email(key): (name: name, password: password)}

        //If registration fails, display an alert. This should be changed to something better

        //Check if the email follows the correct format
        if (validEmail() === false){
            alert("Invalid e-mail!")
        }
        //Check if the e-mail is currently in use
        else if (localStorage.getItem(email) !== null){
            alert("E-mail already in use!")  
        }
        //Check if the password meets the requirements
        else if(strongPasswordCheck() === false){
            alert("Password does not meet the requirements!")
        }
        //Check if the password and confirm password fields are the same
        else if(password !== conpassword){
            alert("Password and confirm password do not match!")
        }
        //If there are no problems, create the account and log the user in.
        else {
            localStorage.setItem(email, JSON.stringify({
                name : name, 
                password : password
            }));

            localStorage.setItem("currentUser", JSON.stringify({
                email : email,
                name : name,
                password : password
            }))
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
        if (password.length >= 8){
            goodLength = true
        }

        //this regular expression is from https://stackoverflow.com/questions/32311081/check-for-special-characters-in-string
        var specialChars = /[!-/:-@[-`{-~]/;

        //iterate over the password string, checking if it meets the requirements stated above.
        for(var i = 0; i < password.length; i++){
            var ch = password[i] 

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

    function onChangeName(n){
        setName(n.target.value)
    }

    function onChangeEmail(e){
        setEmail(e.target.value)
    }

    function onChangePassword(p){
        setPassword(p.target.value)
    }

    function onChangeConPassword(c){
        setConPassword(c.target.value)
    }

    return (
        <div className="page">
            <h1>
                Sign Up
            </h1>
            <form onSubmit={registerUser}>
                <div>
                    <label className="input-label">E-mail</label>
                    <input type="text" className="input-field" value={email} onChange={onChangeEmail} placeholder="E-mail"/>
                </div>

                <div>
                    <label className="input-label">Name</label>
                    <input type="text" className="input-field" value={name} onChange={onChangeName} placeholder="Full name"/>
                </div>

                <div>
                    <label className="input-label">Password</label>
                    <input type="password" className="input-field" value={password} onChange={onChangePassword} placeholder="Password"/>
                </div>

                <div>
                    <label className="input-label">Confirm Password</label>
                    <input type="password" className="input-field" value={conpassword} onChange={onChangeConPassword} placeholder="Confirm password"/>
                </div>
                
                <div>
                    <button className="input-submit" type="submit">Sign Up</button>
                </div>

                <div>
                    <ul className="password-req-list">
                        <h3>Password must follow these requirements:</h3>
                        <li className="password-req">Must be at least 8 characters</li>
                        <li className="password-req">Must include a lowercase letter</li>
                        <li className="password-req">Must include an uppercase letter</li>
                        <li className="password-req">Must include a number</li>
                        <li className="password-req">Must include a special character</li>
                    </ul>
                </div>

            </form>
        </div>
    )
}

export default Registration