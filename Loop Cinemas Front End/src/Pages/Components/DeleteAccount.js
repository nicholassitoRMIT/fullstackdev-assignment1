import { useNavigate } from "react-router-dom";

const sUser = "currentUser"
const sEmail = "email"

function DeleteAccount(props){
    //Component for the "Delete account" button.
    //Upon being pressed, asks the user for confirmation before actually deleting the account.
    const changePage = useNavigate()
    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)


    function deleteAccount(){
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")){
            //If the user confirms deletion, remove the localStorage items and redirect the user to the homepage.
            localStorage.removeItem(user[sEmail])
            localStorage.removeItem(sUser)

            props.setHasUser(false)
            changePage('/')
        }
    }

    return (
        <div>
            <button className="dangerous-button" onClick={deleteAccount}>Delete account</button>
        </div>
    )
}

export default DeleteAccount