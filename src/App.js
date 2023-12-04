import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';
import Button from 'react-bootstrap/Button';
import imagen from './images/fondoRojo.png'
import josevasquez from './images/Jose Vasquez Gorbernador.png'
import josevasquez2 from './images/Jose Vasquez Gorbernador2.png'
import ConfettiComponent from './components/Confetti'
import { images } from './import';
import useSound from 'use-sound';
import sound from './sonidos/campana.mp3'
import sound1 from './sonidos/1.mp3'
import sound2 from './sonidos/2.mp3'
import sound3 from './sonidos/3.mp3'
import sound4 from './sonidos/4.mp3'
import sound5 from './sonidos/5.mp3'
import sound6 from './sonidos/6.mp3'
import sound7 from './sonidos/7.mp3'
import sound8 from './sonidos/8.mp3'
import sound9 from './sonidos/9.mp3'
import sound10 from './sonidos/10.mp3'
import sound11 from './sonidos/11.mp3'
import sound12 from './sonidos/12.mp3'
import sound13 from './sonidos/13.mp3'
import sound14 from './sonidos/14.mp3'
import sound15 from './sonidos/15.mp3'
import sound16 from './sonidos/16.mp3'
import sound17 from './sonidos/17.mp3'
import sound18 from './sonidos/18.mp3'
import sound19 from './sonidos/19.mp3'
import sound20 from './sonidos/20.mp3'
import sound21 from './sonidos/21.mp3'
import sound22 from './sonidos/22.mp3'
import sound23 from './sonidos/23.mp3'
import sound24 from './sonidos/24.mp3'
import sound25 from './sonidos/25.mp3'
import sound26 from './sonidos/26.mp3'
import sound27 from './sonidos/27.mp3'
import sound28 from './sonidos/28.mp3'

function App() {

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  const [paginaCargada, setPaginaCargada] = useState(false);
  const [playSound] = useSound(sound, {volume: 4});
  const [playSound1] = useSound(sound1, {volume: 3});
  const [playSound2] = useSound(sound2, {volume: 3});
  const [playSound3] = useSound(sound3, {volume: 3});
  const [playSound4] = useSound(sound4, {volume: 3});
  const [playSound5] = useSound(sound5, {volume: 3});
  const [playSound6] = useSound(sound6, {volume: 3});
  const [playSound7] = useSound(sound7, {volume: 3});
  const [playSound8] = useSound(sound8, {volume: 3});
  const [playSound9] = useSound(sound9, {volume: 3});
  const [playSound10] = useSound(sound10, {volume: 3});
  const [playSound11] = useSound(sound11, {volume: 3});
  const [playSound12] = useSound(sound12, {volume: 3});
  const [playSound13] = useSound(sound13, {volume: 3});
  const [playSound14] = useSound(sound14, {volume: 3});
  const [playSound15] = useSound(sound15, {volume: 3});
  const [playSound16] = useSound(sound16, {volume: 3});
  const [playSound17] = useSound(sound17, {volume: 3});
  const [playSound18] = useSound(sound18, {volume: 3});
  const [playSound19] = useSound(sound19, {volume: 3});
  const [playSound20] = useSound(sound20, {volume: 3});
  const [playSound21] = useSound(sound21, {volume: 3});
  const [playSound22] = useSound(sound22, {volume: 3});
  const [playSound23] = useSound(sound23, {volume: 3});
  const [playSound24] = useSound(sound24, {volume: 3});
  const [playSound25] = useSound(sound25, {volume: 3});
  const [playSound26] = useSound(sound26, {volume: 3});
  const [playSound27] = useSound(sound27, {volume: 3});
  const [playSound28] = useSound(sound28, {volume: 3});

  const columns = 14;
  const rows = 4;

  useEffect(() => {
    // Simula el tiempo de carga, por ejemplo, 2 segundos
    const tiempoDeCargaSimulado = 500;
    
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
    // Verifica si la carta ya está deshabilitada
    if (disabledCards.includes(number)) {
      return 0; // No hagas nada si la carta ya está deshabilitada
    }
  
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  };





  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }
  }

  useEffect(() => {
    if (firstCard.name === '1.jpg') {
        playSound1();
      }
      if (firstCard.name === '2.jpg') {
        playSound2();
      }
      if (firstCard.name === '3.jpg') {
        playSound3();
      }
      if (firstCard.name === '4.jpg') {
        playSound4();
      }
      if (firstCard.name === '5.jpg') {
        playSound5();
      }
      if (firstCard.name === '6.jpg') {
        playSound6();
      }
      if (firstCard.name === '7.jpg') {
        playSound7();
      }
      if (firstCard.name === '8.jpg') {
        playSound8();
      }
      if (firstCard.name === '9.jpg') {
        playSound9();
      }
      if (firstCard.name === '10.jpg') {
        playSound10();
      }
      if (firstCard.name === '11.jpg') {
        playSound11();
      }
      if (firstCard.name === '12.jpg') {
        playSound12();
      }
      if (firstCard.name === '13.jpg') {
        playSound13();
      }
      if (firstCard.name === '14.jpg') {
        playSound14();
      }
      if (firstCard.name === '15.jpg') {
        playSound15();
      }
      if (firstCard.name === '16.jpg') {
        playSound16();
      }
      if (firstCard.name === '17.jpg') {
        playSound17();
      }
      if (firstCard.name === '18.jpg') {
        playSound18();
      }
      if (firstCard.name === '19.jpg') {
        playSound19();
      }
      if (firstCard.name === '20.jpg') {
        playSound20();
      }
      if (firstCard.name === '21.jpg') {
        playSound21();
      }
      if (firstCard.name === '22.jpg') {
        playSound22();
      }
      if (firstCard.name === '23.jpg') {
        playSound23();
      }
      if (firstCard.name === '24.jpg') {
        playSound24();
      }
      if (firstCard.name === '25.jpg') {
        playSound25();
      }
      if (firstCard.name === '26.jpg') {
        playSound26();
      }
      if (firstCard.name === '27.jpg') {
        playSound27();
      }
      if (firstCard.name === '28.jpg') {
        playSound28();
      }
      
  }, [firstCard]);

  useEffect(() => {
    if (secondCard.name === '1.jpg') {
        playSound1();
      }
      if (secondCard.name === '2.jpg') {
        playSound2();
      }
      if (secondCard.name === '3.jpg') {
        playSound3();
      }
      if (secondCard.name === '4.jpg') {
        playSound4();
      }
      if (secondCard.name === '5.jpg') {
        playSound5();
      }
      if (secondCard.name === '6.jpg') {
        playSound6();
      }
      if (secondCard.name === '7.jpg') {
        playSound7();
      }
      if (secondCard.name === '8.jpg') {
        playSound8();
      }
      if (secondCard.name === '9.jpg') {
        playSound9();
      }
      if (secondCard.name === '10.jpg') {
        playSound10();
      }
      if (secondCard.name === '11.jpg') {
        playSound11();
      }
      if (secondCard.name === '12.jpg') {
        playSound12();
      }
      if (secondCard.name === '13.jpg') {
        playSound13();
      }
      if (secondCard.name === '14.jpg') {
        playSound14();
      }
      if (secondCard.name === '15.jpg') {
        playSound15();
      }
      if (secondCard.name === '16.jpg') {
        playSound16();
      }
      if (secondCard.name === '17.jpg') {
        playSound17();
      }
      if (secondCard.name === '18.jpg') {
        playSound18();
      }
      if (secondCard.name === '19.jpg') {
        playSound19();
      }
      if (secondCard.name === '20.jpg') {
        playSound20();
      }
      if (secondCard.name === '21.jpg') {
        playSound21();
      }
      if (secondCard.name === '22.jpg') {
        playSound22();
      }
      if (secondCard.name === '23.jpg') {
        playSound23();
      }
      if (secondCard.name === '24.jpg') {
        playSound24();
      }
      if (secondCard.name === '25.jpg') {
        playSound25();
      }
      if (secondCard.name === '26.jpg') {
        playSound26();
      }
      if (secondCard.name === '27.jpg') {
        playSound27();
      }
      if (secondCard.name === '28.jpg') {
        playSound28();
      }
      
  }, [secondCard]);

  useEffect(() => {
    if (firstCard.name === '1.jpg' && secondCard.name === '1.jpg') {
        playSound();
      }
      if (firstCard.name === '2.jpg' && secondCard.name === '2.jpg') {
        playSound();
      }
      if (firstCard.name === '3.jpg' && secondCard.name === '3.jpg') {
        playSound();
      }
      if (firstCard.name === '4.jpg' && secondCard.name === '4.jpg') {
        playSound();
      }
      if (firstCard.name === '5.jpg' && secondCard.name === '5.jpg') {
        playSound();
      }
      if (firstCard.name === '6.jpg' && secondCard.name === '6.jpg') {
        playSound();
      }
      if (firstCard.name === '7.jpg' && secondCard.name === '7.jpg') {
        playSound();
      }
      if (firstCard.name === '8.jpg' && secondCard.name === '8.jpg') {
        playSound();
      }
      if (firstCard.name === '9.jpg' && secondCard.name === '9.jpg') {
        playSound();
      }
      if (firstCard.name === '10.jpg' && secondCard.name === '10.jpg') {
        playSound();
      }
      if (firstCard.name === '11.jpg' && secondCard.name === '11.jpg') {
        playSound();
      }
      if (firstCard.name === '12.jpg' && secondCard.name === '12.jpg') {
        playSound();
      }
      if (firstCard.name === '13.jpg' && secondCard.name === '13.jpg') {
        playSound();
      }
      if (firstCard.name === '14.jpg' && secondCard.name === '14.jpg') {
        playSound();
      }
      if (firstCard.name === '15.jpg' && secondCard.name === '15.jpg') {
        playSound();
      }
      if (firstCard.name === '16.jpg' && secondCard.name === '16.jpg') {
        playSound();
      }
      if (firstCard.name === '17.jpg' && secondCard.name === '17.jpg') {
        playSound();
      }
      if (firstCard.name === '18.jpg' && secondCard.name === '18.jpg') {
        playSound();
      }
      if (firstCard.name === '19.jpg' && secondCard.name === '19.jpg') {
        playSound();
      }
      if (firstCard.name === '20.jpg' && secondCard.name === '20.jpg') {
        playSound();
      }
      if (firstCard.name === '21.jpg' && secondCard.name === '21.jpg') {
        playSound();
      }
      if (firstCard.name === '22.jpg' && secondCard.name === '22.jpg') {
        playSound();
      }
      if (firstCard.name === '23.jpg' && secondCard.name === '23.jpg') {
        playSound();
      }
      if (firstCard.name === '24.jpg' && secondCard.name === '24.jpg') {
        playSound();
      }
      if (firstCard.name === '25.jpg' && secondCard.name === '25.jpg') {
        playSound();
      }
      if (firstCard.name === '26.jpg' && secondCard.name === '26.jpg') {
        playSound();
      }
      if (firstCard.name === '27.jpg' && secondCard.name === '27.jpg') {
        playSound();
      }
      if (firstCard.name === '28.jpg' && secondCard.name === '28.jpg') {
        playSound();
      }
      
  }, [firstCard, secondCard, sound, playSound]);


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
  
    // Divide las cartas en filas
    const rowsOfCards = Array.from({ length: rows }, (_, rowIndex) => {
      const start = rowIndex * columns;
      const end = start + columns;
      return cards.slice(start, end);
    });

  return (
    <div className='app'>
       {paginaCargada ? ( 
        <div>  
          <img className='fondocabecera' src={josevasquez}/> 
        <div className='cuerpo'>
        { disabledCards.length === cards.length && <ConfettiComponent/> }
        { disabledCards.length === cards.length && <img className='fondo' src={imagen} onLoad={(e) => {
      e.target.classList.add('fondo-visible');
    }}/> }
        <div className='baulcard'>
        {rowsOfCards.map((row, rowIndex) => (
        <div key={rowIndex} className="card-row">
          {row.map((card, colIndex) => {
            const index = rowIndex * columns + colIndex;
            const isHidden = disabledCards.includes(index);

            return (
              <Card
                key={index}
                name={card.name}
                number={index}
                frontFace={card.src}
                flipCard={flipCard}
                unflippedCards={unflippedCards}
                disabledCards={disabledCards}
                isHidden={isHidden}
              />
            );
          })}
        </div>
      ))}
        </div>
        </div>
          <div className='reloj-reset'>
              <h5>TIEMPO</h5><div className='relojcentro'>{`${Math.floor(segundos / 3600)
              .toString()
              .padStart(2, '0')}:${Math.floor((segundos % 3600) / 60)
              .toString()
              .padStart(2, '0')}:${(segundos % 60).toString().padStart(2, '0')}`}</div>

              <div className=''>
                <Button className='btn btn-primary' onClick={reset}>
                  Nuevo Juego
                </Button>
              </div>
          </div>
          <img className='fondofooter' src={josevasquez2}/> 
          </div>
          ) : ( 
            // Mostrar un mensaje de carga mientras la página se está cargando
              <p>Cargando...</p>
          )} 
        </div>
    
  );
}

export default App;


