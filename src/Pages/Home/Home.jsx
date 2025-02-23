
import React from 'react';
import './Home.css';
import Banner from '../../componentes/HomeBanner/HomeBanner'
import ChooseGameMode from '../../componentes/GameMode/ChooseGameMode/ChooseGameMode';
import WelcomeMessage from '../../componentes/Disclaimer/Disclaimer';
import Others from '../../componentes/Others/Others';

function Home() {
  return (
    <div>
      <WelcomeMessage/>
      <Banner/>
      <div className='homeContainer'>
        <section id='chooseGameMode'>
        <ChooseGameMode 
                linkTo="/guess" 
                imgSrc="https://cdn.pixabay.com/photo/2014/04/03/10/01/erlenmeyer-309612_1280.png" 
                imgAlt="icon" 
                linkText="GUESS THE CHARACTER" 
            />
          <ChooseGameMode 
                linkTo="/" 
                imgSrc="https://cdn.pixabay.com/photo/2014/04/03/10/01/erlenmeyer-309612_1280.png" 
                imgAlt="icon" 
                linkText="GUESS THE LOCATION (WIP)" 
            />
          <ChooseGameMode 
                linkTo="/" 
                imgSrc="https://cdn.pixabay.com/photo/2014/04/03/10/01/erlenmeyer-309612_1280.png"  
                imgAlt="icon" 
                linkText="GUESS THE VOICE (WIP)" 
            />
          
          </section>
          <div className='negroYazul'>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HHF0xlf-bjY" title="The Ballad of Heisenberg by Los Cuates de Sinaloa | Negro y Azul | Breaking Bad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='videoNYA' ></iframe>
              <div className='NYAlyrics'>
                <iframe src="https://www.letras.mus.br/los-cuates-de-sinaloa/negro-y-azul/" frameborder="0" className='iframeLyrics'></iframe>
              </div>
            </div>
      </div>

        <Others/>
    </div>
  )
}

export default Home;
