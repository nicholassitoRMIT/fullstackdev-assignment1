import React from "react"
import Registration from "./Components/SignUp"

function SignUpPage(props){
    return(
        < Registration setHasUser = {props.setHasUser}/>
    )
}

export default SignUpPage