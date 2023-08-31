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
                    <img src={'./images/imgClimber.jpg'} alt="Climber"></img>
                </div>

                <div className="imgRow1">
                    <img src={'./images/imgCoolWalk.jpg'} alt="BadassWalk"></img>
                </div>

                <div className="imgRow1">
                    <img src={'./images/imgDancer.jpg'} alt="Dancer"></img>
                </div>

            </div>
        </div>
    )
}

export default Homepage