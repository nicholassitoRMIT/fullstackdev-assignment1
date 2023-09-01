import React, { useState } from "react";

const sUser = "currentUser"
const sEmail = "email"
const sName = "name"
const sStars = "stars"
const sText = "text"

function ReviewForm(props){
    //Component that lets the user submit, edit or delete their review.

    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)

    const [writeReview, setWrite] = useState(false)

    const [text, setText] = useState('')
    const [stars, setStars] = useState(0)

    var currentReviews = localStorage.getItem(props.movieName)

    if(currentReviews === null){
        localStorage.setItem(props.movieName, JSON.stringify([]))
        currentReviews = localStorage.getItem(props.movieName)
    }

    var parsedReviews = JSON.parse(currentReviews)
    var myReviewExists = false
    var myReviewIndex = -1
    var myReview = []

    for (const review of parsedReviews){
        var pReview = JSON.parse(review)
        if(pReview[sEmail] === user[sEmail]){
            myReviewExists = true
            myReviewIndex = parsedReviews.indexOf(review)
            myReview = pReview
            console.log(myReviewIndex)
            break
        }
    }

    const [hasReview, setHasReview] = useState(myReviewExists)

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
        if(window.confirm("Are you sure you want to delete your review? This action cannot be undone.")){
            parsedReviews.splice(myReviewIndex, 1)
            props.setCurrentReviews(parsedReviews)

            localStorage.setItem(props.movieName, JSON.stringify(parsedReviews))

            alert("Successfully deleted review!")

            changeHasReview()
        } 
    }

    function cancel(){
        setText('')
        setStars(0)
        changeWriteReview()
    }

    function handleReviewSubmit(e){
        e.preventDefault()

        if(stars === 0){
            alert("Please select a star rating.")
        }
        else if(text.trim() === ''){
            alert("Review cannot be empty.")
        }
        else if(text.length > 250){
            alert("Review cannot be longer than 250 characters.")
        }
        else{
            var thisReview = JSON.stringify({
                email : user[sEmail],
                name : user[sName],
                stars : stars,
                text : text
            })

            if(hasReview){
                alert("Successfully edited review!")

                parsedReviews.splice(myReviewIndex, 1)
                parsedReviews.push(thisReview)
                props.setCurrentReviews(parsedReviews)

                localStorage.setItem(props.movieName, JSON.stringify(parsedReviews))

                cancel()
            }
            else {
                alert("Successfully submitted review!")

                currentReviews = JSON.parse(currentReviews)

                currentReviews.push(thisReview)
                localStorage.setItem(props.movieName, JSON.stringify(currentReviews))
                props.setCurrentReviews(parsedReviews)

                changeHasReview()

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