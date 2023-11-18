import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';
import Button from 'react-bootstrap/Button';
import imagen from './images/fondo.png'
import josevasquez from './images/Jose Vasquez Gorbernador.jpg'
import ConfettiComponent from './components/Confetti'

import { images } from './import';

function App() {

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  const [paginaCargada, setPaginaCargada] = useState(false);

  useEffect(() => {
    // Simula el tiempo de carga, por ejemplo, 2 segundos
    const tiempoDeCargaSimulado = 1000;
    
    // Cuando el componente se monta, inicia la carga
    setTimeout(() => {
      setPaginaCargada(true);
    }, tiempoDeCargaSimulado);
  }, []);

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
    if (firstCard.name && Object.keys(secondCard).length === 0) {
      iniciarCronometro(); // Inicia el cronómetro cuando se destapa la primera carta
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (disabledCards.length === cards.length){
      detenerCronometro(); // Detener conometro despues que se destapen todas las cartas
    }
  });
  

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

  useEffect(() => {
    let intervalID;

    if (corriendo) {
      intervalID = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [corriendo]);

  const iniciarCronometro = () => {
    setCorriendo(true);
  };

  const detenerCronometro = () => {
    setCorriendo(false);
  };

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
      {paginaCargada ? (
      <div>
      <div className={'cards-container'}>
        <div className='titulo'>
          MEMOVIAL SECRETARIA DE TRANSPORTE DE GUÁRICO
        </div>
        <div>
          <img className='fondocabecera' src={josevasquez}/> 
        </div>
        <div >
        {disabledCards.length === cards.length && <ConfettiComponent/> }     
                         
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
      
        </div>
      </div>
      <div className='reloj-reset'>
      <div className='relojcentro'>{`${Math.floor(segundos / 3600)
      .toString()
      .padStart(2, '0')}:${Math.floor((segundos % 3600) / 60)
      .toString()
      .padStart(2, '0')}:${(segundos % 60).toString().padStart(2, '0')}`}</div>

      <div className='btn'>
         <Button onClick={reset}>
           Nuevo Juego
         </Button>
      </div>
      </div>
      </div>
      ) : (
        // Mostrar un mensaje de carga mientras la página se está cargando
          <p>Cargando...</p>
      )}
    </div>
  );
}

export default App;


