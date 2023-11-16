import React from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={1000} // Ajusta la cantidad de confetti
      recycle={true} // Establece en true si deseas que el confetti vuelva a aparecer después de caer
      gravity={0.2} // Ajusta la gravedad del confetti
    />
  );
};

export default ConfettiComponent;