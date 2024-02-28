import React, { useState, useEffect } from 'react';
import '../styles/TipsAndNotes.css'; // Asegúrate de tener este archivo CSS.

const TipsAndNotes = () => {
  const tips = [
    "Siempre lee la receta completa antes de comenzar.",
    "Mide tus ingredientes antes de empezar a cocinar.",
    "Mantén tu espacio de trabajo limpio y organizado.",
    "Para obtener mejores resultados, usa ingredientes frescos.",
    "No tengas miedo de ajustar las recetas a tu gusto."
  ];

  const [currentTip, setCurrentTip] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      
      setTimeout(() => {
        setCurrentTip((currentTip) => (currentTip + 1) % tips.length);
        setAnimate(false);
      }, 500);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="tips-container">
      <h2>Tips y Notas de Cocina</h2>
      <div className={`cambio ${animate ? 'animate' : ''}`}>
        <p>{tips[currentTip]}</p>
      </div>
    </div>
  );
};

export default TipsAndNotes;
