import React from "react";

function DanceMovie(){
    return(
        <div>
            <div className="dance-dance">
                <h1>Dance Dance Revolution</h1>
                <img src={'./images/imgDancer.jpg'} className="Dancer" alt="DancerImage"></img>
                <p>Members of a dance troupe from South Dakota tour around the country, and along the way they rekindle their burning passion for their craft.</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>11:00 - 13:00</p>
                <p>16:00 - 18:00</p>
            </div>

            <h2>User Reviews</h2>
            <hr width="90%" align="center" color="#D8A0A6"></hr>
            {/* add reviews after this */}
        </div>
    )
}

export default DanceMovie