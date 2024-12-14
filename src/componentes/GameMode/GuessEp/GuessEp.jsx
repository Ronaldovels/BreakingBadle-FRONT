import React from "react";
import './GuessEp.css'
import { Link } from 'react-router-dom'; 



function GuessEp() {

    return (
        <div id="GuessEp">
            <Link to="/" id="choose">
                <img src="https://res.cloudinary.com/dtnscijch/image/upload/v1734206863/hei_uplerc.png" alt="icon" id="optionIMG" />
                <div id="container_text">
                    <p id="text">Guess the Episode</p>
                </div>
            </Link>
            
        </div>
        
    )

}

export default GuessEp