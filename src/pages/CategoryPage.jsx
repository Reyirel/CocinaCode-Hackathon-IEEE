import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import '../styles/CategoryPage.css'; // Asegúrate de tener este archivo CSS para estilos específicos

const CategoryPage = () => {
  const { categoryName } = useParams();
  const location = useLocation();
  const categoryNameSpanish = location.state?.categoryNameSpanish || categoryName; // Usa el nombre de la API como respaldo

  const [recipes, setRecipes] = useState([]);

  const fetchCategoryRecipes = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
      const data = await response.json();
      setRecipes(data.meals);
    } catch (error) {
      console.error("Error fetching category recipes:", error);
    }
  };

  useEffect(() => {
    fetchCategoryRecipes();
  }, [categoryName]);

  return (
    <div className='principal'>
      <h2>Recetas de {categoryNameSpanish}</h2> {/* Modificación para usar categoryNameSpanish */}
      <div className='tarjetas'>
        {recipes ? recipes.map(recipe => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        )) : <p>No se encontraron recetas para esta categoría.</p>}
      </div>
    </div>
  );
};

export default CategoryPage;
