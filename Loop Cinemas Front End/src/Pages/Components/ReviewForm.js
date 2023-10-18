import React, { useEffect, useState } from "react";
import { editReview, getMovie, getUserReview, postReview, removeReview } from "../../database/repository";

const sUser = "currentUser"
const sStars = "stars"
const sRating = "rating"
const sText = "text"
const sID = "id"

function ReviewForm(props){
    const userID = JSON.parse(localStorage.getItem(sUser))[sID]

    const [movieID, setID] = useState(0)

    const [hasReview, setHasReview] = useState(false)
    const [myReview, setMyReview] = useState('')
    const [myRating, setMyRating] = useState('')

    useEffect(() => {
        async function getMovieID() {
            const movie = await getMovie(props.movieName)
            setID(movie[sID])
        }

        async function loadMyReview(){
            console.log(movieID)
            const review = await getUserReview(movieID, userID)
            if(review !== null){
                setHasReview(true)
                setMyReview(review[sText])
                setMyRating(review[sRating])
            }
        }

        getMovieID()
        loadMyReview()
    }, [movieID])

    const [writeReview, setWrite] = useState(false)
    //Create hooks for whether the user has a review, is writing a review
    //and for the stars and text.
    

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

    async function deleteReview(){
        //Function to delete the user's review.
        //Asks for confirmation first.

        if(window.confirm("Are you sure you want to delete your review? This action cannot be undone.")){
            await removeReview(movieID, userID)

            changeHasReview()
            setMyReview('')
            setMyRating(0)
        }
    }

    function cancel(){
        //If the user cancels writing their review, reset the input fields
        //and change the form back to the button to write/edit/delete.
        setText('')
        setStars(0)
        changeWriteReview()
    }

    async function handleReviewSubmit(e){
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

            if(hasReview){
                const review = await editReview(text, stars, movieID, userID)
                alert("Successfully edited review!")

                setMyReview(text)
                setMyRating(stars)

                cancel()
            }
            else {
                const review = await postReview(text, stars, movieID, userID)
                //If the user didn't have a review before, they are submitting a new one.
                alert("Successfully submitted review!")

                //Update the useState of the user having a review.
                changeHasReview()
                setMyReview(text)
                setMyRating(stars)
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
                    <h3>{myRating} stars: {myReview}</h3>
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