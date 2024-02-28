import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RecipeDetailPage from './pages/RecipeDetailPage'; // Asegúrate de importar el componente
import CategoryPage from './pages/CategoryPage';
import './styles/toggleButton.css';
import './styles/globals.css';

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [showNav]);

  return (
    <>
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <div className={`main-content ${showNav ? 'shift-content' : ''}`} style={{ transform: showNav ? 'translateX(25%)' : 'translateX(0)' }}>
        <button 
          className="navbar-toggle-btn" 
          onClick={() => setShowNav(!showNav)}
          style={{ display: showNav ? 'none' : 'block' }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} /> {/* Ruta para detalles de la receta */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

