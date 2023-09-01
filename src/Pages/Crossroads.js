import React from "react";

function CrossroadsMovie(){
    return(
        <div>
            <div className="crossroads">
                <h1>Crossroads</h1>
                <img src={'./images/imgCoolWalk.jpg'} className="BadassWalk" alt="WalkerImage"></img>
                <p>"Will you walk down a path with no end?" Max Maxington is a special ops agent given two choices- fight for his country, or fight for what he believes in.</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>12:30 - 14:00</p>
                <p>17:00 - 18:30</p>
            </div>

            <h2>User Reviews</h2>
            <hr width="90%" align="center" color="#D8A0A6"></hr>
            {/* add reviews after this */}
        </div>
    )
}

export default CrossroadsMovie