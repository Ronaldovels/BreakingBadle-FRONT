import React from "react";
import './GuessPlace.css'
import { Link } from 'react-router-dom'; 



function GuessPlace() {

    return (
        <div id="GuessPlace">
            <Link to="/" id="choose">
                <img src="https://res.cloudinary.com/dtnscijch/image/upload/v1734206863/hei_uplerc.png" alt="icon" id="optionIMG" />
                <div id="container_text">
                    <p id="text">Guess the Place</p>
                </div>
            </Link>
            
        </div>
        
    )

}

export default GuessPlace