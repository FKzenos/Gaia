import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectOverview.css'; // Assurez-vous de créer ce fichier pour les styles

function ProjectOverview() {
  return (
    <div className="project-overview-container">
      <h1 className="main-title">Présentation du Projet GAIA</h1>
      
      <div className="content">
        <p className="description">
          GAIA, l'avenir de l'agriculture et du jardinage. Avec son mariage entre intelligence artificielle et passion pour la nature, cette application promet de révolutionner la culture des plantes. Dans cette présentation, découvrons comment GAIA redéfinit notre manière de cultiver et de vivre en symbiose avec notre environnement.
        </p>
        
        <p className="description">
          Notre cible pour GAIA : les jardiniers amateurs, les petits agriculteurs et les adeptes du jardinage urbain. Nous leur offrons des conseils personnalisés, une détection précoce des maladies et des solutions durables. Notre stratégie : communication ciblée, partenariats stratégiques et expérience utilisateur sur mesure.
        </p>
        
        <div className="image-gallery">
          <img src="image1.png" alt="Image de présentation 1" className="overview-image" />
          <img src="image2.png" alt="Image de présentation 2" className="overview-image" />
          {/* Ajoutez plus d'images si nécessaire */}
        </div>
      </div>
      
      <div className="button-container">
        <Link to="/">
          <button className="return-home-button">Retour à l'accueil</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectOverview;
