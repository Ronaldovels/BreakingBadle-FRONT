
import React from 'react';
import './Home.css';
import Banner from '../../componentes/HomeBanner/HomeBanner'
import ChooseCharacter from '../../componentes/GameMode/ChooseCharacter/ChooseCharacter';
import GuessEp from '../../componentes/GameMode/GuessEp/GuessEp';
import GuessPlace from '../../componentes/GameMode/GuessPlace/GuessPlace';
import GuessPhrase from '../../componentes/GameMode/GuessPhrase/GuessPhrase';
import WelcomeMessage from '../../componentes/Disclaimer/Disclaimer';
import Others from '../../componentes/Others/Others';

function Home() {
  return (
    <div>
      <WelcomeMessage/>
      <Banner/>
      <section id='guessCharacter'>
        <ChooseCharacter/>
        <GuessEp/>
        <GuessPlace/>
        <GuessPhrase/>
        </section>
        <Others/>
    </div>
  )
}

export default Home;
