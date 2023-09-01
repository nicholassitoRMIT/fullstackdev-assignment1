import React, { useState } from "react";
import Reviews from "./Components/Review";
import ReviewForm from "./Components/ReviewForm";

function CrossroadsMovie(props){
    //Variable for the movie name to be passed as a prop.
    const movieName = "Crossroads"

    //Initialise an empty list of reviews if there aren't any.
    var reviews = localStorage.getItem(props.movieName)
    if(reviews === null){
        localStorage.setItem(props.movieName, JSON.stringify([]))
        reviews = localStorage.getItem(props.movieName)
    }
    var parsedReviews = JSON.parse(reviews)

    //UseState of the list of reviews to be passed as a prop.
    const [currentReviews, setCurrentReviews] = useState(parsedReviews)

    return(
        <div>
            <div className="crossroads">
                <h1>Crossroads</h1>
                <img src={'./images/imgCoolWalk.jpg'} className="BadassWalk" alt="WalkerImage"></img>
                <p>"Will you walk down a path with no end?" Max Maxington is a special ops agent given two choices- fight for his country, or fight for what he believes in.</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>12:30 - 14:00</p>
                <p>17:00 - 18:30</p>
            </div>
            
            <hr width="90%" align="center" color="#D8A0A6"></hr>
            
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

export default CrossroadsMovie