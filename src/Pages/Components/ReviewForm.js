import React, { useState } from "react";

const sUser = "currentUser"

function ReviewForm(props){
    var user = localStorage.getItem(sUser)
    user = JSON.parse(user)

    const [writeReview, setWrite] = useState(false)

    const [text, setText] = useState('')
    const [stars, setStars] = useState(0)

    function changeWriteReview(){
        setWrite(!writeReview)
    }

    function onChangeStars(s){
        setStars(s.target.value)
    }

    function deleteReview(){

    }

    return (
        <div>
            {writeReview ? 
            <div>
                <form>
                    <div>
                        <input type="radio" value={1} onChange={onChangeStars}/>
                        <input type="radio" value={2} onChange={onChangeStars}/>
                        <input type="radio" value={3} onChange={onChangeStars}/>
                        <input type="radio" value={4} onChange={onChangeStars}/>
                        <input type="radio" value={5} onChange={onChangeStars}/>
                    </div>
                </form>
            </div>
            :
            <>
                {props.hasReview ?
                <div>
                    <button className="input-submit" onClick={changeWriteReview}>Edit review</button>
                    <button className="dangerous-button" onClick={deleteReview}>Delete review</button>
                </div>
                : 
                <div>
                    <button className="input-submit" onClick={changeWriteReview}>Write review</button>
                </div>
                }
            </>
            }
        </div>
    )
}

export default ReviewForm