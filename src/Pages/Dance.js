import React, { useState } from "react";
import Reviews from "./Components/Review";
import ReviewForm from "./Components/ReviewForm";

function DanceMovie(props){
    //Variable for the movie name to be passed as a prop.
    const movieName = "Dance Dance Revolution"

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
            <div className="dance-dance">
                <h1>Dance Dance Revolution</h1>
                <img src={'./images/imgDancer.jpg'} className="Dancer" alt="DancerImage"></img>
                <p>Members of a dance troupe from South Dakota tour around the country, and along the way they rekindle their burning passion for their craft.</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>11:00 - 13:00</p>
                <p>16:00 - 18:00</p>
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

export default DanceMovie