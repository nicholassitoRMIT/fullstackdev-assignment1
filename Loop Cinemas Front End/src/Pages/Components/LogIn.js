import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//s in this case means string
const sPassword = "password"
const sName = "name"

const sUser = "currentUser"

function LogIn(props){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const changePage = useNavigate()

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

        //Make sure all input fields are filled out
        if(email === '' || password === ''){
            alert("Please fill out all fields!")
        }
        else if(user === null){
            //if the user is null, then there is no e-mail associated with the account
            alert("No account associated with this e-mail!")
        }
        else {
            var data = JSON.parse(user)

            //check for correct password
            if(data[sPassword] === password){
                //Upon a successful log-in, put the user as currentUser in localStorage, 
                //show a pop-up for a successful log-in, change the hasUser state
                //and send the user to the homepage.
                localStorage.setItem(sUser, JSON.stringify({
                    email : email,
                    name : data[sName],
                    password : data[sPassword]
                }))
                alert("Successful log-in!")
                props.setHasUser(true)
                changePage('/')
            }
            else{
                alert("Incorrect password!")
            }
        }

    }

    return (
        <div>
            <form onSubmit={logIn}>
                <div>
                    <label className="input-label">E-mail</label>
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