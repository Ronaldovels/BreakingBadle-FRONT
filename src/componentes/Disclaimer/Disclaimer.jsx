import React, { useState, useEffect } from 'react';
import './Disclaimer.css'

function WelcomeMessage() {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    useEffect(() => {
      // Verifica no localStorage se o usuário já viu a mensagem
      const hasSeenMessage = localStorage.getItem('hasSeenWelcomeMessage');
  
      if (!hasSeenMessage) {
        // Se não viu, exibe a mensagem
        setIsModalVisible(true);
      }
    }, []);
  
    const handleCloseModal = () => {
      // Salva no localStorage para indicar que o usuário já viu a mensagem
      localStorage.setItem('hasSeenWelcomeMessage', 'true');
      setIsModalVisible(false);
    };
  
    return (
      <div>
        {isModalVisible && (
          <div className="modal">
            <div className="modal-content">
              <h2>Welcome to BREAKINGBADLE!!</h2>
              <p id='disclaimer'>This is a simple game based in one of the best shows in history! If you have any sugestions or comments just contact me!</p>
              <p id='disclaimer'>ronaldovf24@gmail.com</p>
              <p id='disclaimer'>Enjoy the game!😄</p>
              <button onClick={handleCloseModal} id='disclaimerButton'>Got it</button>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default WelcomeMessage;
