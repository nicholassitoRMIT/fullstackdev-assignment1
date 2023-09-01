import React from "react";

const sName = "name"
const sStars = "stars"
const sText = "text"

function Reviews(props){
    var reviews = localStorage.getItem(props.movieName)
    var parsedReviews = JSON.parse(reviews)

    const reviewsHTML = []

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