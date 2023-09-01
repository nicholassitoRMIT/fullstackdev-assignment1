import React from "react";

function TheClimberMovie(){
    return(
        <div>
            <div className="climber">
                <h1>The Climber</h1>
                <img src={'./images/imgClimber.jpg'} className="Climber" alt="ClimberImage"></img>
                <p>A riveting tale about John Mountain, a man whose life goal is to scale the tallest mountains in the world, and his trials and tribulations in attempting to climb Mount Everest.</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>12:00 - 13:30</p>
                <p>14:00 - 15:30</p>
            </div>

            <h2>User Reviews</h2>
            <hr width="90%" align="center" color="#D8A0A6"></hr>
            {/* add reviews after this */}
        </div>
    )
}

export default TheClimberMovie