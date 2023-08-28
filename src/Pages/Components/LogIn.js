import React, { useState } from "react";

//s in this case means string
const sPassword = "password"
const sName = "name"

const sUser = "currentUser"

function LogIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onChangeEmail(e){
        setEmail(e.target.value)
    }

    function onChangePassword(p){
        setPassword(p.target.value)
    }

    function logIn(e){
        e.preventDefault()
        //Login function.
        //Upon successful login, sets currentUser in localStorage to whoever logged in.
        //Otherwise, shows an error

        //Currently uses alerts, should be changed to something better later

        //Users are stored with the e-mail as key, so we get the user from localStorage

        var user = localStorage.getItem(email)
        if(email === '' || password === ''){
            alert("Please fill out all fields!")
        }
        else if(user === null){
            //if the user is null, then there is no e-mail associated with the account
            alert("No e-mail associated with this account!")
        }
        else {
            var data = JSON.parse(user)

            //check for correct password
            if(data[sPassword] === password){
                alert("Successful login")
                localStorage.setItem(sUser, JSON.stringify({
                    email : email,
                    name : data[sName],
                    password : data[sPassword]
                }))
            }
            else{
                alert("Incorrect password!")
            }
        }

    }

    return (
        <div>
            <h1>Log in</h1>

            <form onSubmit={logIn}>
                <div>
                    <label className="input-label">Email</label>
                    <input type='text' className="input-field" value={email} onChange={onChangeEmail} placeholder="E-mail"/>
                </div>

                <div>
                    <label className="input-label">Password</label>
                    <input type='password' className="input-field" value={password} onChange={onChangePassword} placeholder="Password"/>
                </div>

                <div>
                    <button className="input-submit" type='submit'>Log In</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn