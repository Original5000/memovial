import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Cronometro from './components/Cronometro';
import './App.css';
import Button from 'react-bootstrap/Button';
import imagen from './images/fondo.png'

import { images } from './import';

function App() {

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  
  const reset = () => {
    window.location.reload();
  }

  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, [])

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    }
    else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  }

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }
  }

  const disableCards = () => {
    setDisabledCards((prevDisabledCards) => [
      ...prevDisabledCards,
      firstCard.number,
      secondCard.number,
    ]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  }

  return (
    <div className='app'>
      <div className='cards-container mb-4' style={{ backgroundImage: "url(./imagen.png)" }} >
        <div className='titulo mb-5'>
          MEMOVIAL SECRETARIA DE TRANSPORTE 
        </div>   
        <img className='fondo' src={imagen}/>
      
         {
  cards.map((card, index) => {
    const isHidden = disabledCards.includes(index);
    return (
      <Card
        key={index}
        name={card.player}
        number={index}
        frontFace={card.src}
        flipCard={flipCard}
        unflippedCards={unflippedCards}
        disabledCards={disabledCards}
        isHidden={isHidden}
      />
    );
  })
}


  <Cronometro/>
  
      </div>
      <div className='btn mt-5'>
         <Button onClick={reset}>
           Nuevo Juego
         </Button>
      </div>
    </div>
  );
}

export default App;
