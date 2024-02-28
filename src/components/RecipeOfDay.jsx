import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Paso 1: Importa useNavigate
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import '../styles/RecipeOfDay.css';

const RecipeOfDay = () => {
  const [recipe, setRecipe] = useState({});
  const [ref, inView] = useInView({ triggerOnce: true });
  const navigate = useNavigate(); // Paso 2: Usa useNavigate

  const fadeInH2 = useSpring({
    from: { opacity: 0 },
    opacity: inView ? 1 : 0,
    delay: inView ? 500 : 0,
  });

  const fadeInH3 = useSpring({
    from: { opacity: 0 },
    opacity: inView ? 1 : 0,
    delay: inView ? 1000 : 0,
  });

  const fadeInP = useSpring({
    from: { opacity: 0 },
    opacity: inView ? 1 : 0,
    delay: inView ? 1500 : 0,
  });

  const fadeInButton = useSpring({
    from: { opacity: 0 },
    opacity: inView ? 1 : 0,
    delay: inView ? 2000 : 0,
  });

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => {
        setRecipe(response.data.meals[0]);
      });
  }, []);

  const handleButtonClick = () => {
    // Paso 3: Navega a la página de detalles de la receta
    navigate(`/recipe/${recipe.idMeal}`);
  };

  return (
    <div ref={ref}>
      <animated.div className="recipe-of-day-container">
        <div className="recipe-of-day-image">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <div className="recipe-of-day-text">
          <animated.h2 style={fadeInH2}>Receta del <span>día.</span></animated.h2>
          <animated.h3 style={fadeInH3}>{recipe.strMeal}</animated.h3>
          <animated.p style={fadeInP}>{recipe.strInstructions}</animated.p>
          <br />
          <animated.button onClick={handleButtonClick} style={fadeInButton} className="button">Ver más</animated.button>
        </div>      
      </animated.div>
    </div>
  );
}

export default RecipeOfDay;
