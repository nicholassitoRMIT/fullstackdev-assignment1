import React from "react"

//TODO: UNFINISHED

function Homepage(){
    return(
        <div>
            <h1>
                Currently Showing Movies
            </h1>

            <img src={'./images/imgBike.jpg'} className="imgBike" width="800" height="350" alt=""/>

            <div className="row1">
                <div className="imgRow1">
                    <img src={'./images/imgClimber.jpg'} className="Climber" alt="ClimberImage"></img>
                    <h2>The Climber</h2>
                </div>

                <div className="imgRow1">
                    <img src={'./images/imgCoolWalk.jpg'} className="BadassWalk" alt="WalkerImage"></img>
                    <h2>Crossroads</h2>
                </div>

                <div className="imgRow1">
                    <img src={'./images/imgDancer.jpg'} className="Dancer" alt="DancerImage"></img>
                    <h2>Dance Dance Revolution</h2>
                </div>

            </div>
        </div>
    )
}

export default Homepage