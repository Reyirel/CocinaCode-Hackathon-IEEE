import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import '../styles/HomePage.css';
import RecipeOfDay from '../components/RecipeOfDay';
import TopRecipes from '../components/TopRecipes';
import TipsAndNotes from '../components/TipsAndNotes';

const HomePage = () => {
  const location = useLocation();
  const pulsingText = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#FFA500' },
      { opacity: 1, color: '#000b' },
    ],
    from: { opacity: 0.5, color: '#000' },
    config: { duration: 3000 },
  });

  useEffect(() => {
    const sectionId = location.state?.sectionId;
    if (sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="home-container">
      <div className="initial" id="principal">
        <div className="text-container">
          <h1>Bienvenidos a Mi <animated.span style={pulsingText}>Recetario</animated.span></h1>
          <p>Descubre las mejores recetas para cada ocasión.</p>
        </div>
        <div className="image-container">
        </div>
      </div>

      <div className="second" id="recipe-of-the-day">
        <div className="receta_del_dia">
          <RecipeOfDay />
        </div>
      </div>

      <div className="third" id="top-recipes">
        <div className="top-recipes">
          <TopRecipes />
        </div>
      </div>

      <div className="fourth" id="tips-and-notes">
        <div className="tips-notas">
          <TipsAndNotes />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
