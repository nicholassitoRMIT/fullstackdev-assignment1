import React, { useEffect, useState } from "react";
import { getMovie } from "../database/repository";

const sDescription = "description"

function KickoutComponent(props){

    const [desc, setDesc] = useState('')

    useEffect(() => {
        async function loadData() {
            const movie = await getMovie(props.movieName)

            setDesc(movie[sDescription])
        }
        loadData()
    }, [])

    return (
        <div>
            <div className="kickout">
                <h1>{props.movieName}</h1>
                <img src={"./images/imgFootball.jpg"} className="Football" alt="FootballImage"></img>
                <p>{desc}</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>

            <div className="showtimes">
                <h2>Showing Times</h2>
                <p>11:00 - 12:30</p>
                <p>13:30 - 15:00</p>
            </div>

            <hr width="90%" align="center" color="#D8A0A6"></hr>
        </div>
    )
}

export default KickoutComponent