import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../database/repository";

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

    async function logIn(e){
        e.preventDefault()
        //Login function.
        //Upon successful login, sets currentUser in localStorage to whoever logged in.
        //Otherwise, shows an error.

        //Make sure all input fields are filled out
        if(email === '' || password === ''){
            alert("Please fill out all fields!")
        }
        else {
            //Try to log-in the user.
            const user = await loginUser(email, password)

            if (user !== null){
                alert("Successful log-in!")
                props.setHasUser(true)
                changePage('/')
            }
            else {
                alert("Log-in failed. Make sure the e-mail and password are correct.")
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