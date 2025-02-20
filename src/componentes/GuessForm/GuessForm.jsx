import React, { useState, useEffect, useRef } from 'react';
import './GuessForm.css';

function GuessForm() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestionSelected, setIsSuggestionSelected] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dailyCharacter, setDailyCharacter] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [lastCharacter, setLastCharacter] = useState(null);
  const [comparisonHistory, setComparisonHistory] = useState([]);
  const [isGuessedCorrectly, setIsGuessedCorrectly] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false); 
  const [timeRemaining, setTimeRemaining] = useState(''); 
  const [usedGuesses, setUsedGuesses] = useState([]);
  const lastQueriedValue = useRef('');

  const guessedCharacterRef = useRef(null);


  const characteristicLabels = {
    gender: 'Gender',
    age: 'Age',
    hair_color: 'Hair Color',
    occupation: 'Occupation',
    affiliation: 'Affiliation',
    firstAppearance: 'First Appearance',
    majorCrime: 'Major Crime',
    characterImg: 'Character'
  };

  const resetLocalStorage = () => {
    localStorage.removeItem('dailyGuess');
    localStorage.removeItem('comparisonHistory');
    localStorage.removeItem('usedGuesses');
    console.log('Local storage foi resetado');
    setIsGuessedCorrectly(false);
    setComparisonHistory([]);
    setUsedGuesses([]);
    setShowCongrats(false);
  };

  const setResetCookie = () => {
    const nextResetTime = new Date();
    nextResetTime.setUTCHours(10, 59, 59, 0); 
  

    if (new Date() >= nextResetTime) {
      nextResetTime.setUTCDate(nextResetTime.getUTCDate() + 1);
    }
  
    document.cookie = `nextResetTime=${nextResetTime.toISOString()}; expires=${nextResetTime.toUTCString()}; path=/`;
    console.log('Próximo reset agendado para:', nextResetTime);
  };

  const checkAndResetLocalStorage = () => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    };
  
    const storedResetTime = getCookie('nextResetTime');
    const now = new Date();
  
    if (!storedResetTime || new Date(storedResetTime) <= now) {
      resetLocalStorage();
      setResetCookie();
    }
  };

  useEffect(() => {
    checkAndResetLocalStorage();
  }, []);

  const fetchDailyCharacter = async () => {
    try {
      const response = await fetch("https://characterdle-api.onrender.com/character/bbd/daily");
      const data = await response.json();
      setDailyCharacter(data);

      const lastCharacterResponse = await fetch("https://characterdle-api.onrender.com/character/bbd/last");
      const lastCharacterData = await lastCharacterResponse.json();
      setLastCharacter(lastCharacterData);

      const savedDailyGuess = localStorage.getItem('dailyGuess');
      const savedComparisonHistory = localStorage.getItem('comparisonHistory');
      const lastPlayedDate = localStorage.getItem('lastPlayedDate');

      const now = new Date();
      const currentDate = now.toISOString().split('T')[0];

      const changeHour = 11;
      const changeTime = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        changeHour, 0, 0, 0
      ));

      if (now >= changeTime) {
        changeTime.setUTCDate(changeTime.getUTCDate() + 1);
      }

      if (lastPlayedDate !== currentDate && now >= changeTime) {
        localStorage.removeItem('dailyGuess');
        localStorage.removeItem('comparisonHistory');
        localStorage.removeItem('usedGuesses');
        localStorage.setItem('lastPlayedDate', currentDate);
        setIsGuessedCorrectly(false);
        setComparisonHistory([]);
        setUsedGuesses([]);
        setShowCongrats(false);
      }

      if (savedDailyGuess) {
        const parsedGuess = JSON.parse(savedDailyGuess);
        if (parsedGuess && parsedGuess.characterId === data.id) {
          setIsGuessedCorrectly(true);
          setShowCongrats(true);
        }
      }

      if (savedComparisonHistory) {
        const parsedHistory = JSON.parse(savedComparisonHistory);
        setComparisonHistory(parsedHistory);
      }
    } catch (error) {
      console.error('Erro ao buscar o personagem do dia:', error);
    }
  };


  useEffect(() => {

    fetchDailyCharacter();
  }, []);



  const fetchSuggestions = async (query) => {
    if (query.length === 0) {
      setSuggestions([]);
      return;
    }

    if (query === lastQueriedValue.current) {
      return;
    }

    setLoading(true);
    lastQueriedValue.current = query;

    try {
      const response = await fetch(`https://characterdle-api.onrender.com/character/bbd?name=${query}&exactMatch=false`);
      const data = await response.json();
  
      if (data && Array.isArray(data)) {
        const filteredSuggestions = data
        .map((item) => ({
          name: item.name,
          characterImg: item.characterImg,
        }))
        .filter((item) => 
          item.name && 
          item.characterImg && 
          item.name.toLowerCase().includes(lastQueriedValue.current)
        );
  
        setSuggestions(filteredSuggestions.slice(0, 5));
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      setSuggestions([]);
    }
  
    setLoading(false);
  };


  const fetchCharacterDetails = async (name) => {
    try {
      const response = await fetch(`https://characterdle-api.onrender.com/character/bbd?name=${name}&exactMatch=true`);
      const data = await response.json();
      if (data && data.length > 0) {
        setSelectedCharacter(data[0]);
      } else {
        setSelectedCharacter(null);
      }
    } catch (error) {
      console.error('Erro ao buscar detalhes do personagem:', error);
      setSelectedCharacter(null);
    }
  };


  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsSuggestionSelected(false);

    fetchSuggestions(value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsInputFocused(false), 200);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    setIsSuggestionSelected(true);
    fetchCharacterDetails(suggestion);
    setIsInputFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSuggestionSelected && selectedCharacter && dailyCharacter) {
      // Verifica se o personagem já foi usado como palpite
      if (usedGuesses.includes(selectedCharacter.name)) {
        alert('Este personagem já foi escolhido. Tente um personagem diferente.');
        return;
      }

      const characteristics = [
        'name', 'gender', 'age', 'hair_color', 'occupation', 'affiliation', 'firstAppearance', 'majorCrime'
      ];

      const allMatched = characteristics.every((characteristic) => {
        const userValue = selectedCharacter[characteristic];
        const dailyValue = dailyCharacter[characteristic];
        return userValue && userValue === dailyValue;
      });

      const newComparison = {
        selectedCharacter,
        dailyCharacter,
        id: new Date().getTime() // Criação de um ID único baseado no timestamp
      };

      setComparisonHistory((prevHistory) => {
        const updatedHistory = [newComparison, ...prevHistory];
        localStorage.setItem('comparisonHistory', JSON.stringify(updatedHistory));
        return updatedHistory;
      });

      // Adiciona o nome do personagem à lista de usados
      setUsedGuesses((prevGuesses) => [...prevGuesses, selectedCharacter.name]);
      localStorage.setItem('usedGuesses', JSON.stringify([...usedGuesses, selectedCharacter.name]));

      if (allMatched) {
        setIsGuessedCorrectly(true);
        localStorage.setItem(
          'dailyGuess',
          JSON.stringify({ characterId: dailyCharacter.id, guessed: true })
        );

        const totalAnimationTime = 0.6 * 10 - 0.5; // Tempo total da animação das comparações em segundos
        console.log('Starting timeout for showing congrats message');
        setTimeout(() => {
          setShowCongrats(true);
          console.log('Timeout finished, showing congrats message');
        }, totalAnimationTime * 1000); // Converte para milissegundos
      }

      setInputValue('');
      setIsSuggestionSelected(false);
      document.activeElement.blur();
    } else {
      alert('Por favor, selecione uma das sugestões.');
    }
  };


  // Função para calcular o tempo restante até o próximo personagem (24h UTC)
  const calculateTimeRemaining = () => {
    const now = new Date();
    const nextCharacterTime = new Date();

    nextCharacterTime.setUTCHours(11, 0, 0, 0);

    if (now.getUTCHours() >= 11) {
      nextCharacterTime.setUTCDate(now.getUTCDate() + 1);
    }

    const timeDiff = nextCharacterTime - now;

    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    const formattedTime = `${hours}h ${minutes}m ${seconds}s`;
    setTimeRemaining(formattedTime);
  
    if (hours === 0 && minutes === 0 && seconds === 0) {
      resetLocalStorage();
      fetchDailyCharacter()
      console.log("Local storage foi limpo porque o cronômetro chegou a 0h 0m 0s.");
    }
  };

  

  useEffect(() => {
    if (isGuessedCorrectly && showCongrats && guessedCharacterRef.current) {
      guessedCharacterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showCongrats, isGuessedCorrectly]);


  useEffect(() => {
    if (dailyCharacter) {
      console.log('dailyCharacter foi carregado:', dailyCharacter);
      const timer = setInterval(calculateTimeRemaining, 1000);
      return () => clearInterval(timer);
    }
  }, [dailyCharacter]);

  const renderComparison = (comparison, index) => {
  const { selectedCharacter, dailyCharacter } = comparison;

  const characteristics = [
    'characterImg', 'gender', 'age', 'hair_color', 'occupation', 'affiliation','firstAppearance',  'majorCrime'
  ];

  return (
    <div key={comparison.id} className={`comparison-container animate-item`}>
      <div className="comparison-values">
        {characteristics.map((characteristic, i) => {
          const userValue = selectedCharacter[characteristic];
          const dailyValue = dailyCharacter[characteristic];
          
          let isPartialMatch = false;

          if (characteristic === 'filiation' && userValue && dailyValue) {
            const userValuesArray = userValue.split(',').map((val) => val.trim().toLowerCase());
            const dailyValuesArray = dailyValue.split(',').map((val) => val.trim().toLowerCase());
            isPartialMatch = userValuesArray.some((userVal) => dailyValuesArray.includes(userVal));
          }

          const isExactMatch = userValue && dailyValue && userValue === dailyValue;

          if (characteristic === 'characterImg') {
            return (
              <div
                key={i}
                className={`comparison-item ${isExactMatch ? 'match' : isPartialMatch ? 'partial-match' : 'mismatch'}`}
              >
                {selectedCharacter.characterImg ? (
                  <img
                    src={selectedCharacter.characterImg}
                    alt={selectedCharacter.name || 'Selected character'}
                    className="comparison-img"
                    onError={(e) => { e.target.src = '/path/to/fallback-image.jpg'; }} 
                  />
                ) : 'No Image'}
              </div>
            );
          }

          return (
            <div
              key={i}
              className={`comparison-item ${isExactMatch ? 'match' : isPartialMatch ? 'partial-match' : 'mismatch'}`}
            >
              {userValue || 'N/A'}
            </div>
          );
        })}
      </div>
    </div>
  );
};


  return (
    <div>
      <div id="formTitleContainer">
        <h1 id="formt_title">Guess The Character</h1>
      </div>
      <div id="formContainer">
        <form onSubmit={handleSubmit} id="form_">
          <input
            id="character"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            required
            placeholder="Digite um personagem"
            autoComplete="off"
            disabled={isGuessedCorrectly} 
          />
          <button
            type="submit"
            id="submitButton"
            disabled={!isSuggestionSelected || isGuessedCorrectly} 
          >
            <img
              src="https://res.cloudinary.com/dtnscijch/image/upload/v1739994176/fly_eewtjo.svg"
              alt="submit"
              id="submitButtonImg"
            />
          </button>
        </form>

        {isInputFocused && suggestions.length > 0 && (
  <ul className="suggestions-list">
    {suggestions.map((suggestion, index) => (
      <li
        key={index}
        onClick={() => handleSuggestionClick(suggestion.name)}
        className="suggestion-item"
      >
        <img
          src={suggestion.characterImg}
          alt={suggestion.name}
          className="suggestion-img"
          onError={(e) => { e.target.src = '/path/to/fallback-image.jpg'; }} 
        />
        <span>{suggestion.name}</span>
      </li>
            ))}
          </ul>
        )}
      </div>


      <div className="comparison-labels">
        {[
          'Character', 'Gender','Age','Hair Color', 'Occupation','Affiliation','First Appearance', 'Major Crime',
        ].map((label, index) => (
          <div key={index} className="label-item">
            <strong>{label}</strong>
          </div>
        ))}
      </div>

      <div className="comparison-results">
        {comparisonHistory.map((comparison, index) => renderComparison(comparison, index))}
      </div>

      {lastCharacter && (
        <div id="lastCharacterSection">
          <div id="lastCharacterTitle">
            <h2>Yesterday's Character</h2>
          </div>
          <div id="lastCharacterDetails">
            <img
              src={lastCharacter.characterImg}
              alt={lastCharacter.name}
              id="lastCharacterImg"
            />
            <p id="lastCharacterName">{lastCharacter.name}</p>
          </div>
        </div>
      )}

      <div id="colorIndicatorsContainer">
        <div id='colorIndicators'>
          <h2>Color Indicators</h2>
          <div id="indicatorContainer">
            <div id="correctIndicator">
              <div id='greenSquare'></div>
              <p id='greenText'>Correct</p>
            </div>
            <div id='incorrectIndicator'>
              <div id='redSquare'></div>
              <p id='redText'>Incorrect</p>
            </div>
            <div id='parcialIndicator'>
              <div id='yellowSquare'></div>
              <p id='yellowText'>Parcial</p>
            </div>
              
          </div>
        </div>
      </div>


      {isGuessedCorrectly && showCongrats && dailyCharacter && (
        <div id="sucess-messageContainer">
          <div className="success-message" ref={guessedCharacterRef}>
            <div id="congratsTitleContainer">
              <h2>Congrats!</h2>
              <h2 id='congratsTitle'>You guessed today's character!</h2>
            </div>
            <div id="characterGuessRight">
              <img
                src={dailyCharacter.characterImg} 
                alt={dailyCharacter.name}
                id="guessedCharacterImg"
              />
              <p id="guessedCharacterName">{dailyCharacter.name}</p>
            </div>
            <p id='tries'>Tries: {comparisonHistory.length}</p> 
            <h2 id='timeNextCharacter'>Next Character in: </h2>
            <p id='timeRemaining'>{timeRemaining}</p>
       
            <p>{dailyCharacter.about}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GuessForm;
