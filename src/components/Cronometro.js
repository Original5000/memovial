import React, { useState, useEffect } from 'react';

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

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

  const iniciarDetenerCronometro = () => {
    setCorriendo(!corriendo);
  };

  const reiniciarCronometro = () => {
    setSegundos(0);
    setCorriendo(false);
  };

  return (
    <div>
      <p>{`${Math.floor(segundos / 3600)
      .toString()
      .padStart(2, '0')}:${Math.floor((segundos % 3600) / 60)
      .toString()
      .padStart(2, '0')}:${(segundos % 60).toString().padStart(2, '0')}`}</p>
      <button onClick={iniciarDetenerCronometro}>
        {corriendo ? 'Detener' : 'Iniciar'}
      </button>
      <button onClick={reiniciarCronometro}>Reiniciar</button>
    </div>
  );
}

export default Cronometro;