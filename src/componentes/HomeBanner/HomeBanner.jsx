import React from 'react';
import './HomeBanner.css'

import { Link } from 'react-router-dom'; // Importar Link para navegação


function Banner() {
    return (
        <main id="HomeBannerMain">
            <div className='formulasContainer'>
            <div className='formulas1'>
                    <span className='formulasText' style={{ '--i': 8 }}><p>H<sub>2</sub>O</p></span>
                    <span className='formulasText' style={{ '--i': 3 }}><p>CO<sub>2</sub></p></span>
                    <span className='formulasText' style={{ '--i': 11 }}><p>CH<sub>4</sub></p></span>
                    <span className='formulasText' style={{ '--i': 7 }}><p>NH<sub>3</sub></p></span>
                    <span className='formulasText' style={{ '--i': 5 }}><p>O<sub>2</sub></p></span>
                    <span className='formulasText' style={{ '--i': 1 }}><p>NaCl</p></span>
                    <span className='formulasText' style={{ '--i': 6 }}><p>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></p></span>
                    <span className='formulasText' style={{ '--i': 13 }}><p>C<sub>4</sub>H<sub>15</sub>N</p></span>
                    <span className='formulasText' style={{ '--i': 12 }}><p>H<sub>2</sub>SO<sub>4</sub></p></span>
                    <span className='formulasText' style={{ '--i': 2 }}><p>CaCO<sub>3</sub></p></span>
                    <span className='formulasText' style={{ '--i': 10 }}><p>HCl</p></span>
                    <span className='formulasText' style={{ '--i': 4 }}><p>NaOH</p></span>
                    <span className='formulasText' style={{ '--i': 9 }}><p>H<sub>2</sub>O<sub>2</sub></p></span>
                </div>
                <div className='formulas2'>
                    <span className='formulasText' style={{ '--i': 1 }}><p>H<sub>2</sub>O</p></span>
                    <span className='formulasText' style={{ '--i': 11 }}><p>CO<sub>2</sub></p></span>
                    <span className='formulasText' style={{ '--i': 8 }}><p>CH<sub>4</sub></p></span>
                    <span className='formulasText' style={{ '--i': 9 }}><p>NH<sub>3</sub></p></span>
                    <span className='formulasText' style={{ '--i': 3 }}><p>O<sub>2</sub></p></span>
                    <span className='formulasText' style={{ '--i': 6 }}><p>NaCl</p></span>
                    <span className='formulasText' style={{ '--i': 7 }}><p>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></p></span>
                    <span className='formulasText' style={{ '--i': 12 }}><p>H<sub>2</sub>SO<sub>4</sub></p></span>
                    <span className='formulasText' style={{ '--i': 5 }}><p>CaCO<sub>3</sub></p></span>
                    <span className='formulasText' style={{ '--i': 10 }}><p>HCl</p></span>
                    <span className='formulasText' style={{ '--i': 13 }}><p>C<sub>4</sub>H<sub>15</sub>N</p></span>
                    <span className='formulasText' style={{ '--i': 2 }}><p>NaOH</p></span>
                    <span className='formulasText' style={{ '--i': 4 }}><p>H<sub>2</sub>O<sub>2</sub></p></span>
                </div>
            </div>
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
            <div className='formulasContainer'>
            <div className='formulas3'>
                    <span className='formulasText' style={{ '--i': 5 }}><p>H<sub>2</sub>O</p></span>
                    <span className='formulasText' style={{ '--i': 13 }}><p>C<sub>4</sub>H<sub>15</sub>N</p></span>
                    <span className='formulasText' style={{ '--i': 8 }}><p>CO<sub>2</sub></p></span>
                    <span className='formulasText' style={{ '--i': 7 }}><p>CH<sub>4</sub></p></span>
                    <span className='formulasText' style={{ '--i': 12 }}><p>NH<sub>3</sub></p></span>
                    <span className='formulasText' style={{ '--i': 4 }}><p>O<sub>2</sub></p></span>
                    <span className='formulasText' style={{ '--i': 6 }}><p>NaCl</p></span>
                    <span className='formulasText' style={{ '--i': 9 }}><p>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></p></span>
                    <span className='formulasText' style={{ '--i': 11 }}><p>H<sub>2</sub>SO<sub>4</sub></p></span>
                    <span className='formulasText' style={{ '--i': 3 }}><p>CaCO<sub>3</sub></p></span>
                    <span className='formulasText' style={{ '--i': 1 }}><p>HCl</p></span>
                    <span className='formulasText' style={{ '--i': 2 }}><p>NaOH</p></span>
                    <span className='formulasText' style={{ '--i': 10 }}><p>H<sub>2</sub>O<sub>2</sub></p></span>
                </div>
                <div className='formulas4'>
                    <span className='formulasText' style={{ '--i': 9 }}><p>H<sub>2</sub>O</p></span>
                    <span className='formulasText' style={{ '--i': 12 }}><p>CO<sub>2</sub></p></span>
                    <span className='formulasText' style={{ '--i': 7 }}><p>CH<sub>4</sub></p></span>
                    <span className='formulasText' style={{ '--i': 11 }}><p>NH<sub>3</sub></p></span>
                    <span className='formulasText' style={{ '--i': 13 }}><p>C<sub>4</sub>H<sub>15</sub>N</p></span>
                    <span className='formulasText' style={{ '--i': 6 }}><p>O<sub>2</sub></p></span>
                    <span className='formulasText' style={{ '--i': 5 }}><p>NaCl</p></span>
                    <span className='formulasText' style={{ '--i': 2 }}><p>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></p></span>
                    <span className='formulasText' style={{ '--i': 8 }}><p>H<sub>2</sub>SO<sub>4</sub></p></span>
                    <span className='formulasText' style={{ '--i': 4 }}><p>CaCO<sub>3</sub></p></span>
                    <span className='formulasText' style={{ '--i': 10 }}><p>HCl</p></span>
                    <span className='formulasText' style={{ '--i': 3 }}><p>NaOH</p></span>
                    <span className='formulasText' style={{ '--i': 1 }}><p>H<sub>2</sub>O<sub>2</sub></p></span>
                </div>
            </div>
        </main>
    )
}

export default Banner