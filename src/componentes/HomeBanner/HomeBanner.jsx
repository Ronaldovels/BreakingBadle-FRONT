import React from 'react';
import './HomeBanner.css'

import { Link } from 'react-router-dom'; // Importar Link para navegação


function Banner() {
    return (
        <main id="HomeBannerMain">
            <nav id='HomeNav'>
                <Link to="/" id='link_title'>
                    <h1 id='home'>
                        <div id="container">
                            <div id="number">35</div>
                                <div id="BR">Br</div>
                        </div>
                        <div id="none">eaking</div>
                        <div id="container">
                            <div id="number">35</div>
                                <div id="BA">Ba</div>
                        </div>
                        <div id="none">DLE</div>
                    </h1>
                </Link>
                <Link to="/" id='link_sub'>
                    <p id='subtitle_home'>
                        i am not in danger i am the danger
                    </p>
                </Link>
            </nav>
        </main>
    )
}

export default Banner