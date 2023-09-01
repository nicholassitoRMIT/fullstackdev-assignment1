import React from "react";

function KickoutMovie(){
    return(
        <div>
            <div className="kickout">
                <h1>Kickout</h1>
                <img src={"./images/imgFootball.jpg"} className="Football" alt="FootballImage"></img>
                <p>Two teams, One winner. FC Bartolomeo and Running Mazeno are the two titans of the International Football Association, and have pried their way up to face off against each other in the Grand Finals. This movie is inspired by real events.</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>11:00 - 12:30</p>
                <p>13:30 - 15:00</p>
            </div>

            <h2>User Reviews</h2>
            <hr width="90%" align="center" color="#D8A0A6"></hr>
            {/* add reviews after this */}
        </div>
    )
}

export default KickoutMovie