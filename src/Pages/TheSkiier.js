import React from "react";

function TheSkiierMovie(){
    return(
        <div>
            <div className="skiier">
                <h1>Dance Dance Revolution</h1>
                <img src={"./images/imgSkiier.jpg"} className="Skiier" alt="SkiierImage"></img>
                <p>Willis Wilkinson, a pro skiier, tore his ACL in a tournament 5 years ago. Will he manage to rebuild his career, or will he be forced to quit the sport?</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>10:30 - 12:00</p>
                <p>12:30 - 14:00</p>
            </div>

            <h2>User Reviews</h2>
            <hr width="90%" align="center" color="#D8A0A6"></hr>
            {/* add reviews after this */}
        </div>
    )
}

export default TheSkiierMovie