import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="logo-container">
        <img src="logo.png" alt="Logo GAIA" className="logo" />
      </div>
      <h1 className="main-title">Le Projet GAIA</h1>
    
      <div className="home-options">
        <Link to="/project-overview">
          <div className="option-card">
            <img src="presentation.png" alt="Présentation du projet" className="card-image" />
            <h2 className="card-title">Présentation du projet</h2>
          </div>
        </Link>
        <Link to="/plant-info">
          <div className="option-card">
            <img src="plante.jpg" alt="Informations sur les plantes" className="card-image" />
            <h2 className="card-title">Informations sur les plantes</h2>
          </div>
        </Link>
        <Link to="/capture">
          <div className="option-card">
            <img src="analyse.jpg" alt="Capture de photo" className="card-image" />
            <h2 className="card-title">Conseils et solutions pour vos plantes</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
