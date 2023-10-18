import axios from "axios";

const DB_HOST = "http://localhost:4000"
const sUser = "currentUser"

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

async function updateName(username){

}


export {
    loginUser, createUser
}