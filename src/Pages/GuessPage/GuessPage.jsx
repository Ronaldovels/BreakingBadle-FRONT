import React from "react";
import './GuessPage.css'
import Banner from '../../componentes/HomeBanner/HomeBanner'
import GuessForm from '../../componentes/GuessForm/GuessForm'
import Others from '../../componentes/Others/Others';

function GuessPage() {

  return (
    <div id="bannerContaienr">
      <Banner />
      <div id="guessFormContainer">
        <GuessForm />
      </div>
      <Others/>
    </div>
  )

}

export default GuessPage