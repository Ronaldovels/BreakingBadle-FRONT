import React from "react";
import './ChooseCharacter.css'
import { Link } from 'react-router-dom'; 



function ChooseCharacter() {

    return (
        <div id="ChooseCharacter">
            <Link to="/guess" id="choose">
                <img src="https://res.cloudinary.com/dtnscijch/image/upload/v1734206863/hei_uplerc.png" alt="icon" id="optionIMG" />
                <div id="container_text">
                    <p id="text">Guess the Character</p>
                </div>
            </Link>
            
        </div>
        
    )

}

export default ChooseCharacter