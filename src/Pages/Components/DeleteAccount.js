import { useNavigate } from "react-router-dom";

const sUser = "currentUser"
const sEmail = "email"

function DeleteAccount(props){
    const changePage = useNavigate()
    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)


    function deleteAccount(){
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")){
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