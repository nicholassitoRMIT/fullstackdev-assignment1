import React, { useState } from "react";
import ReviewForm from "./Components/ReviewForm";
import Reviews from "./Components/Review";

function TheSkiierMovie(props){
    const movieName = "The Skiier"

    var reviews = localStorage.getItem(props.movieName)
    if(reviews === null){
        localStorage.setItem(props.movieName, JSON.stringify([]))
        reviews = localStorage.getItem(props.movieName)
    }
    var parsedReviews = JSON.parse(reviews)

    const [currentReviews, setCurrentReviews] = useState(parsedReviews)

    return(
        <div>
            <div className="skiier">
                <h1>The Skiier</h1>
                <img src={"./images/imgSkiier.jpg"} className="Skiier" alt="SkiierImage"></img>
                <p>Willis Wilkinson, a pro skiier, tore his ACL in a tournament 5 years ago. Will he manage to rebuild his career, or will he be forced to quit the sport?</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>10:30 - 12:00</p>
                <p>12:30 - 14:00</p>
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

export default TheSkiierMovie