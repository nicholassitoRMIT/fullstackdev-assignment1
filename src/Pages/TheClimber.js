import React, { useState } from "react";
import ReviewForm from "./Components/ReviewForm";
import Reviews from "./Components/Review";

function TheClimberMovie(props){
    const movieName = "The Climber"

    var reviews = localStorage.getItem(props.movieName)
    if(reviews === null){
        localStorage.setItem(props.movieName, JSON.stringify([]))
        reviews = localStorage.getItem(props.movieName)
    }
    var parsedReviews = JSON.parse(reviews)

    const [currentReviews, setCurrentReviews] = useState(parsedReviews)

    return(
        <div>
            <div className="climber">
                <h1>The Climber</h1>
                <img src={'./images/imgClimber.jpg'} className="Climber" alt="ClimberImage"></img>
                <p>A riveting tale about John Mountain, a man whose life goal is to scale the tallest mountains in the world, and his trials and tribulations in attempting to climb Mount Everest.</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>12:00 - 13:30</p>
                <p>14:00 - 15:30</p>
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

export default TheClimberMovie