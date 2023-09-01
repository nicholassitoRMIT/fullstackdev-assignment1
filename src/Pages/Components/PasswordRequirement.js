import React from "react";

function PasswordRequirement(){
    //Component that shows the password requirements.
    //It is shown when creating a new account or a user is changing their password.
    return (
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
    )
}

export default PasswordRequirement