import React, { useState } from "react";
import Reviews from "./Components/Review";
import ReviewForm from "./Components/ReviewForm";

function KickoutMovie(props){
    const movieName = "Kickout"

    var reviews = localStorage.getItem(props.movieName)
    if(reviews === null){
        localStorage.setItem(props.movieName, JSON.stringify([]))
        reviews = localStorage.getItem(props.movieName)
    }
    var parsedReviews = JSON.parse(reviews)

    const [currentReviews, setCurrentReviews] = useState(parsedReviews)

    return(
        <div>
            <div className="kickout">
                <h1>Kickout</h1>
                <img src={"./images/imgFootball.jpg"} className="Football" alt="FootballImage"></img>
                <p>Two teams, One winner. FC Bartolomeo and Running Mazeno are the two titans of the International Football Association, and have pried their way up to face off against each other in the Grand Finals. This movie is inspired by real events.</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>11:00 - 12:30</p>
                <p>13:30 - 15:00</p>
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

export default KickoutMovie