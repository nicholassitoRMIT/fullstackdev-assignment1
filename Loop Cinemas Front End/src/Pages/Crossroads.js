import React, { useEffect, useState } from "react";
import Reviews from "./Components/Review";
import ReviewForm from "./Components/ReviewForm";
import { getMovie } from "../database/repository";

const sName = "name"
const sDescription = "description"

function CrossroadsMovie(props){
    //Variable for the movie name to be passed as a prop.
    const name = "Crossroads"

    const [movieName, setName] = useState('')
    const [movieDesc, setDesc] = useState('')

    useEffect(() => {
        async function loadMovie() {
            const movie = await getMovie(name);

            setName(movie[sName])
            setDesc(movie[sDescription])
        }
        loadMovie()
    }, [])

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
                <h1>{movieName}</h1>
                <img src={'./images/imgCoolWalk.jpg'} className="BadassWalk" alt="WalkerImage"></img>
                <p>{movieDesc}</p>
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