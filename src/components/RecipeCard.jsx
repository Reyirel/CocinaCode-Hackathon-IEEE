import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; // Importación agregada
import '../styles/RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const navigate = useNavigate(); // Uso de useNavigate

  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 0, // El valor de index * 100 se ha simplificado directamente a 0, ya que el index no se usa.
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const handleViewComplete = () => {
    navigate(`/recipe/${recipe.idMeal}`); // Navega a la página de detalles de la receta
  };

  return (
    <animated.div ref={ref} style={fadeInUp} className="recipe-card">
      <div className="recipe-card-image">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <div className="recipe-card-info">
        <h3>{recipe.strMeal}</h3>
        <button onClick={handleViewComplete}>Ver completo</button>
      </div>
    </animated.div>
  );
}

export default RecipeCard;
