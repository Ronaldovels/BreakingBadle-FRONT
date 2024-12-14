import React from "react";
import './GuessPhrase.css'
import { Link } from 'react-router-dom'; 



function GuessPhrase() {

    return (
        <div id="GuessPhrase">
            <Link to="/" id="choose">
                <img src="https://res.cloudinary.com/dtnscijch/image/upload/v1734206863/hei_uplerc.png" alt="icon" id="optionIMG" />
                <div id="container_text">
                    <p id="text">Guess the Episode</p>
                </div>
            </Link>
            
        </div>
        
    )

}

export default GuessPhrase