import React from "react";

const sName = "name"
const sStars = "stars"
const sText = "text"

function Reviews(props){
    //Component to show all reviews.

    //Props include the movieName and a prop for all the reviews.
    //Unfortunately, the latter prop doesn't seem to work as intended
    //so I must access the list of reviews from this component.

    //However, it serves its function to update the "all reviews" section
    //whenever the current user modifies their review.

    //If there are no reviews, initialise an empty list.
    var reviews = localStorage.getItem(props.movieName)
    if(reviews === null){
        localStorage.setItem(props.movieName, JSON.stringify([]))
        reviews = localStorage.getItem(props.movieName)
    }
    var parsedReviews = JSON.parse(reviews)

    //Initialise an empty array of the html containing the reviews.
    const reviewsHTML = []

    //Loop through all the reviews and add them to the html array.
    if(parsedReviews !== null)
        parsedReviews.forEach(review => {
            var thisReview = JSON.parse(review)

            reviewsHTML.push(
                <div>
                    <h3>Review by {thisReview[sName]}: {thisReview[sStars]} stars</h3>
                    <p>{thisReview[sText]}</p>
                </div>
            )
        });

    //If there are no reviews, the html will just show that there aren't any.
    if (reviewsHTML.length === 0){
        reviewsHTML.push(
            <div>
                <h3>No reviews to show!</h3>
            </div>
        )
    }

    return(
        <div>
            {reviewsHTML}
        </div>
    )
}

export default Reviews