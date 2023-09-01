import React, { useState } from "react";
import Reviews from "./Components/Review";
import ReviewForm from "./Components/ReviewForm";

function ChampionsRunMovie(props){
    //Variable for the movie name to be passed as a prop.
    const movieName = "Champion's run"

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
            <div className="skiier">
                <h1>Champion's Run</h1>
                <img src={"./images/imgBaseball.jpg"} className="Baseball" alt="BaseballImage"></img>
                <p>The Louisiana Cubs are a failing baseball team, but a new coach with devilish training programmes and creative strategies was scouted to assist them for the season. Will this new coach lead them to victory, or will he be their downfall?</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>11:00 - 13:00</p>
                <p>15:00 - 17:00</p>
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

export default ChampionsRunMovie