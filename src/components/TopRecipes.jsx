// En TopRecipes.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import '../styles/TopRecipes.css';

const TopRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const requests = Array.from({ length: 12 }, () =>
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      );
      const responses = await Promise.all(requests);
      const meals = responses.map(response => response.data.meals[0]);
      setRecipes(meals);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="top-recipes-container">
      <h2>Top recetas <span>populares.</span></h2>
      <div className="cards-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TopRecipes;
