import React, { useState } from "react";

const sUser = "currentUser"
const sEmail = "email"
const sName = "name"
const sStars = "stars"
const sText = "text"

function ReviewForm(props){
    //Component that lets the user submit, edit or delete their review.
    //Props contain the movie name and a useState to update the list of reviews and 
    //re-render the component showing all reviews.

    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)

    //Since this component lets the user post, edit and delete their review,
    //we must determine if they have a review before rendering anything.

    //Get a list of all reviews of the movie
    var currentReviews = localStorage.getItem(props.movieName)

    //If the list is null(e.g. upon opening the page for the first time)
    //initialise an empty list.
    if(currentReviews === null){
        localStorage.setItem(props.movieName, JSON.stringify([]))
        currentReviews = localStorage.getItem(props.movieName)
    }
    var parsedReviews = JSON.parse(currentReviews)

    //Initialise variables for the user's review as if it doesn't exist.
    var myReviewExists = false
    var myReviewIndex = -1
    var myReview = []

    for (const review of parsedReviews){
        var pReview = JSON.parse(review)

        //Compare the reviews by e-mail since that is unique to each user.
        if(pReview[sEmail] === user[sEmail]){
            //if the user has a review, store that it exists, its index and the actual contents.
            myReviewExists = true
            myReviewIndex = parsedReviews.indexOf(review)
            myReview = pReview
            console.log(myReviewIndex)
            //break the loop afterwards as it's not possible for anyone to have multiple reviews.
            break
        }
    }

    //Create hooks for whether the user has a review, is writing a review
    //and for the stars and text.
    const [hasReview, setHasReview] = useState(myReviewExists)
    const [writeReview, setWrite] = useState(false)

    const [text, setText] = useState('')
    const [stars, setStars] = useState(0)

    function changeWriteReview(){
        setWrite(!writeReview)
    }

    function changeHasReview(){
        setHasReview(!hasReview)
    }

    function onChangeStars(s){
        setStars(s.target.value)
    }

    function onChangeText(t){
        setText(t.target.value)
    }

    function deleteReview(){
        //Function to delete the user's review.
        //Asks for confirmation first.
        if(window.confirm("Are you sure you want to delete your review? This action cannot be undone.")){

            alert("Successfully deleted review!")

            //Should the user delete their review, remove it from the list of reviews and localStorage. 
            parsedReviews.splice(myReviewIndex, 1)
            localStorage.setItem(props.movieName, JSON.stringify(parsedReviews))

            //In addition, update the state for all reviews and whether the user has a review.
            props.setCurrentReviews(parsedReviews)
            changeHasReview()

            //We don't need to cancel here, as we never access the review writing form.
        } 
    }

    function cancel(){
        //If the user cancels writing their review, reset the input fields
        //and change the form back to the button to write/edit/delete.
        setText('')
        setStars(0)
        changeWriteReview()
    }

    function handleReviewSubmit(e){
        e.preventDefault()
        //Function to submit the review. This function works for both editing and submitting a new review.

        //In order to submit a review, it must have a star rating,
        //It cannot be empty(or just contain whitespace) and it must not exceed 250 characters in length.
        if(stars === 0){
            //Let the user know if they have not selected a star rating.
            alert("Please select a star rating.")
        }
        else if(text.trim() === ''){
            //Let the user know if their review is empty.
            alert("Review cannot be empty.")
        }
        else if(text.length > 250){
            //Let the user know if their review is too long.
            alert("Review cannot be longer than 250 characters.")
        }
        else{
            //If the review meets the requirements, stringify it.
            var thisReview = JSON.stringify({
                email : user[sEmail],
                name : user[sName],
                stars : stars,
                text : text
            })

            if(hasReview){
                //If the user already has a review, meaning they're editing it.
                alert("Successfully edited review!")

                //We must remove the original review using the index from before and
                //add the new one after.
                parsedReviews.splice(myReviewIndex, 1)
                parsedReviews.push(thisReview)
                localStorage.setItem(props.movieName, JSON.stringify(parsedReviews))

                //Update the prop for all reviews.
                props.setCurrentReviews(parsedReviews)

                //In a similar way to profile editing, I use cancel to reset the form.
                cancel()
            }
            else {
                //If the user didn't have a review before, they are submitting a new one.
                alert("Successfully submitted review!")

                //Add the new review to the list of all reviews and localStorage.
                parsedReviews.push(thisReview)
                localStorage.setItem(props.movieName, JSON.stringify(parsedReviews))

                //Update the prop for all reviews.
                props.setCurrentReviews(parsedReviews)

                //Update the useState of the user having a review.
                changeHasReview()

                //Reset the form.
                cancel()
            }
        }
    }

    return (
        <div>
            {writeReview ? 
            <div>
                <form onSubmit={handleReviewSubmit}>
                    <label>Star rating</label>
                    <div>
                        <input type="radio" className="star" value={1} name="stars" onChange={onChangeStars}/>
                        <input type="radio" className="star" value={2} name="stars" onChange={onChangeStars}/>
                        <input type="radio" className="star" value={3} name="stars" onChange={onChangeStars}/>
                        <input type="radio" className="star" value={4} name="stars" onChange={onChangeStars}/>
                        <input type="radio" className="star" value={5} name="stars" onChange={onChangeStars}/>
                    </div>

                    <label>Review</label>
                    <textarea className="review-field" value={text} onChange={onChangeText}/>

                    <div className="button-box">
                        <button className="input-submit" type='submit'>Submit review</button>
                    </div>
                    <div className="button-box">
                        <button className="input-submit" onClick={cancel}>Cancel</button>
                    </div>
                </form>
            </div>
            :
            <>
                {hasReview ?
                <div>
                    <h3>{myReview[sName]}: {myReview[sStars]}</h3>
                    <p>{myReview[sText]}</p>
                    <div className="button-box">
                        <button className="input-submit" onClick={changeWriteReview}>Edit review</button>
                    </div>
                    <div className="button-box">
                        <button className="dangerous-button" onClick={deleteReview}>Delete review</button>
                    </div>
                </div>
                : 
                <div>
                    <p>You have not reviewed this movie! Would you like to review it?</p>
                    <button className="input-submit" onClick={changeWriteReview}>Write review</button>
                </div>
                }
            </>
            }
        </div>
    )
}

export default ReviewForm