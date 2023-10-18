import React from "react"
import { Link } from "react-router-dom";

function MoviePage(){
    
    return(
        <div className="MovieContent">
            <h1>Movies</h1>

            <div className="row1">
                <div className="imgRow1">
                    <img src={'./images/imgClimber.jpg'} className="Climber" alt="ClimberImage"></img>
                    <h2><Link to="/the-climber" className="movieTitle">The Climber</Link></h2>
                    <p>12:00 - 13:30</p>
                    <p>14:00 - 15:30</p>
                </div>

                <div className="imgRow1">
                    <img src={'./images/imgCoolWalk.jpg'} className="BadassWalk" alt="WalkerImage"></img>
                    <h2><Link to="/crossroads" className="movieTitle">Crossroads</Link></h2>
                    <p>12:30 - 14:00</p>
                    <p>17:00 - 18:30</p>
                </div>

                <div className="imgRow1">
                    <img src={'./images/imgDancer.jpg'} className="Dancer" alt="DancerImage"></img>
                    <h2><Link to="/dance-dance-revolution" className="movieTitle">Dance Dance Revolution</Link></h2>
                    <p>11:00 - 13:00</p>
                    <p>16:00 - 18:00</p>
                </div>
            </div>

            <div className="row2">
                <div className="imgRow2">
                    <img src={"./images/imgSkiier.jpg"} className="Skiier" alt="SkiierImage"></img>
                    <h2><Link to="/the-skiier" className="movieTitle">The Skiier</Link></h2>
                    <p>10:30 - 12:00</p>
                    <p>12:30 - 14:00</p>
                </div>

                <div className="imgRow2">
                    <img src={"./images/imgBaseball.jpg"} className="Baseball" alt="BaseballImage"></img>
                    <h2><Link to="/champions-run" className="movieTitle">Champion's Run</Link></h2>
                    <p>11:00 - 13:00</p>
                    <p>15:00 - 17:00</p>
                </div>

                <div className="imgRow2">
                    <img src={"./images/imgFootball.jpg"} className="Football" alt="FootballImage"></img>
                    <h2><Link to="/kickout" className="movieTitle">Kickout</Link></h2>
                    <p>11:00 - 12:30</p>
                    <p>13:30 - 15:00</p>
                </div>
            </div>
        </div>
    )
}

export default MoviePage