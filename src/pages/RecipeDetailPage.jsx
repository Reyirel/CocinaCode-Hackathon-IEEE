import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/RecipeDetailPage.css';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        if (data.meals) {
          const enrichedData = {
            ...data.meals[0],
            prepTime: '45 minutos',
            difficulty: 'Media'
          };
          setRecipe(enrichedData);
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  if (!recipe) {
    return <div>Cargando detalles de la receta...</div>;
  }

  return (
    <motion.div className="recipe-details" variants={container} initial="hidden" animate="visible">
      <h2>{recipe.strMeal}</h2>
      <div className="detalles">
        <div className="imagen">
          <motion.img src={recipe.strMealThumb} alt={recipe.strMeal} variants={item} />
        </div>
        <div className="recipe-meta">
          <motion.span variants={item}>Tiempo de preparación: {recipe.prepTime}</motion.span>
          <motion.span variants={item}>Dificultad: {recipe.difficulty}</motion.span>
          <br />
          <motion.p variants={item}>{recipe.strInstructions}</motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeDetailPage;
