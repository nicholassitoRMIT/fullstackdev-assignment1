import React from "react";

function ChampionsRunMovie(){
    return(
        <div>
            <div className="skiier">
                <h1>Champion's Run</h1>
                <img src={"./images/imgBaseball.jpg"} className="Baseball" alt="BaseballImage"></img>
                <p>The Louisiana Cubs are a failing baseball team, but a new coach with devilish training programmes and creative strategies was scouted to assist them for the season. Will this new coach lead them to victory, or will he be their downfall?</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>11:00 - 13:00</p>
                <p>15:00 - 17:00</p>
            </div>

            <h2>User Reviews</h2>
            <hr width="90%" align="center" color="#D8A0A6"></hr>
            {/* add reviews after this */}
        </div>
    )
}

export default ChampionsRunMovie