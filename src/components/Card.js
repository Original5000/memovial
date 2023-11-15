import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import backFace from '../images/semaforo.jpg'

const Card = ({ name, number, frontFace, flipCard, unflippedCards, disabledCards, isHidden }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 1000);
    }
  }, [unflippedCards])

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false);
    }
  }, [disabledCards])

  
  const handleClick = e => {
    const value = flipCard(name, number);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
      if (!isHidden) {
        setTimeout(() => {
          setShouldHide(true);
        }, 5000);
      }
    } 
  }

  const cardStyles = {
    opacity: shouldHide ? 0 : 1,
    width: shouldHide ? '90px' : '90px', // Establece un ancho mínimo para la carta oculta
    height: shouldHide ? '90px' : '90px', // Establece un alto mínimo para la carta oculta
    transition: 'opacity 4s', // Cambio suave de opacidad
    zIndex: -1, 
  };

  return (
    <div className="card" onClick={handleClick} >
      <ReactCardFlip isFlipped={isFlipped} >
      {isHidden ? <img className='card-image' src={backFace}  alt='back-face' style={{ ...cardStyles }} onClick={hasEvent ? handleClick : null} /> : <img className='card-image' src={backFace}  alt='back-face' onClick={hasEvent ? handleClick : null} />}
      {isHidden ? <img className='card-image' src={frontFace} alt='front-face' style={{ ...cardStyles }} onClick={hasEvent ? handleClick : null} /> : <img className='card-image' src={frontFace} alt='front-face' onClick={hasEvent ? handleClick : null} />}
      </ReactCardFlip>
    </div>
  )
}

export default Card
