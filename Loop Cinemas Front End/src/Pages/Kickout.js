import React, { useEffect, useState } from "react";
import Reviews from "./Components/Review";
import ReviewForm from "./Components/ReviewForm";
import KickoutComponent from "./KickoutComponent";

const sID = "id"
const sUser = "currentUser"

function KickoutMovie(props){

    const movieName = "Kickout"
    const [currentReviews, setCurrentReviews] = useState([])
    
    return(
        <div>
            <KickoutComponent movieName = {movieName}/>
            
            {props.hasUser ?
                <><h2>My review</h2>
                <ReviewForm movieName={movieName} setCurrentReviews={setCurrentReviews}/></>
                :
                <><h2>You must be logged in to leave a review.</h2></>
            }
            
            <hr width="90%" align="center" color="#D8A0A6"></hr>
            <h2>User Reviews</h2>
            
            <Reviews movieName={movieName} currentReviews={currentReviews}/>
        </div>
    )
}

export default KickoutMovie