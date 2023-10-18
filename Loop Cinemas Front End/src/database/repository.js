import axios from "axios";

const DB_HOST = "http://localhost:4000"
const sUser = "currentUser"
const sID = "id"

async function loginUser(email, password) {
    //Function to log in the user.
    const user = await axios.get(DB_HOST + "/api/users/login", {params: {email: email, password: password}})
    const data = user.data

    //The API call will either return the user data or null.
    //null is returned when the log-in fails, because of incorrect password/e-mail.

    if(data !== null){
        //Have persistent log-in with localStorage
        localStorage.setItem(sUser, JSON.stringify(data))
    }

    return data
}

async function createUser(email, username, password){
    //Function to register a new user.
    const user = await axios.post(DB_HOST + "/api/users/register", {email: email, username: username, password: password})
    const data = user.data

    //The API call will either return the user data or null.
    //null is returned when the registration fails,
    //which happens if the user is trying to register with an e-mail that's already in use.

    if(data !== null) {
        //Persistent and automatic log-in with localStorage
        localStorage.setItem(sUser, JSON.stringify(data))
    }

    return data
}

async function confirmPassword(password){
    //Verifies the password when changing name/e-mail/password on the user's account.

    //Get user ID from local storage
    const userID = JSON.parse(localStorage.getItem(sUser))[sID]
    console.log(userID)

    const user = await axios.get(DB_HOST + "/api/users/verify-password", {params: {password: password, id: userID}})
    const data = user.data

    //The API call will return null for a wrong password and the user data for a right one.
    //Since we don't need the data itself, only whether the password is correct, we return true/false.
    if(data !== null) {
        return true
    }
    else {
        return false
    }
}

async function updateName(username){
    //Updates a user's username in the database.
    const userID = JSON.parse(localStorage.getItem(sUser))[sID]

    const user = await axios.patch(DB_HOST + "/api/users/change-name", {username: username, id: userID})
    const data = user.data

    //The API call will either return the user data or null.
    //null is returned when the user is trying to change their username to one that's already taken.

    if(data !== null) {
        //Update the user data in local storage
        localStorage.setItem(sUser, JSON.stringify(data))
    }

    return data
}

async function updateEmail(email){
    //Updates a user's email in the database.
    const userID = JSON.parse(localStorage.getItem(sUser))[sID]

    const user = await axios.patch(DB_HOST + "/api/users/change-email", {email: email, id: userID})
    const data = user.data

    //The API call will either return the user data or null.
    //null is returned when the user is trying to change their email to one that's already taken.

    if(data !== null) {
        //Update the user data in local storage
        localStorage.setItem(sUser, JSON.stringify(data))
    }

    return data
}

async function updatePassword(password){
    //Updates a user's password in the database.
    const userID = JSON.parse(localStorage.getItem(sUser))[sID]

    const user = await axios.patch(DB_HOST + "/api/users/change-password", {password: password, id: userID})
    const data = user.data

    return data
}


export {
    loginUser, createUser, confirmPassword, updateName, updateEmail, updatePassword
}