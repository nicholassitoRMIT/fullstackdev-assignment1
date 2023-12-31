import React from "react"
import Registration from "./Components/SignUp"

function SignUpPage(props){
    //Sign up page. Contains the SignUp component.
    return(
        <div class="page">
            <h1>Sign Up</h1>
            < Registration setHasUser = {props.setHasUser}/>
        </div>
    )
}

export default SignUpPage