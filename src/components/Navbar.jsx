// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = ({ showNav, setShowNav }) => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Vegetariana', apiName: 'Vegetarian' },
    { name: 'Carnes y aves', apiName: 'Chicken' },
    { name: 'Pescados y mariscos', apiName: 'Seafood' },
    { name: 'Pasta y arroces', apiName: 'Pasta' },
    { name: 'Ensaladas y verduras', apiName: 'Salad' },
    { name: 'Postres', apiName: 'Dessert' },
    { name: 'Comida rápida', apiName: 'Fast Food' },
    { name: 'Comida internacional', apiName: 'International' }
  ];

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    navigate('/', { state: { sectionId } });
  };

  const handleHomeLinkClick = (e) => {
    e.preventDefault();
    navigate('/', { state: { sectionId: 'principal' } });
  };

  return (
    <nav className={`navbar ${showNav ? 'show' : 'hide'}`}>
      <button onClick={() => setShowNav(!showNav)} className="navbar-toggle">
        <FontAwesomeIcon icon={showNav ? faTimes : faBars} />
      </button>
      <div className="navbar-home">
        <Link to="/" onClick={handleHomeLinkClick}>Inicio</Link>
      </div>
      <div>
        <h3>Categorías</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.apiName}>
              <Link 
                to={`/category/${category.apiName}`} 
                state={{ categoryNameSpanish: category.name }}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <h3>Descubre</h3>
      <ul>
        <li><a href="#" onClick={(e) => handleNavLinkClick(e, 'recipe-of-the-day')}>Receta del día</a></li>
        <li><a href="#" onClick={(e) => handleNavLinkClick(e, 'top-recipes')}>Top recetas del mes</a></li>
        <li><a href="#" onClick={(e) => handleNavLinkClick(e, 'tips-and-notes')}>Tips y notas</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;