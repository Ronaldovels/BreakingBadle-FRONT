import React from "react";
import './ChooseGameMode.css'
import { Link } from 'react-router-dom';



function ChooseGameMode({ linkTo, imgSrc, imgAlt, linkText }) {

    return (
        <div id="ChooseContainer">
            <Link to={linkTo} id="choose">
                <div className="imgContainer">
                    <div className="smoke">
                    <div className='particle'></div>
                    <img src={imgSrc} alt={imgAlt} id="optionIMG" />
                    </div>
                </div>
                <div id="container_text">
                    <p id="text">{linkText}</p>
                </div>
                <div className="imgContainer">
                    <div className="smoke">
                    <div className='particle'></div>
                    <img src={imgSrc} alt={imgAlt} id="optionIMG" />
                    </div>
                </div>
            </Link>
        </div>

    )

}

export default ChooseGameMode