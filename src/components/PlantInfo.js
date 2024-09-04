import React from 'react';
import './PlantInfo.css'; // Assurez-vous de créer ce fichier pour les styles

function PlantInfo() {
  return (
    <div className="plant-info-container">
      <div className="header-container">
        <img src="logo.png" alt="Logo GAIA" className="logo" />
        <h1 className="main-title">Informations sur les Plantes</h1>
      </div>
      <section className="content-section">
        <h2 className="section-title">Introduction</h2>
        <p className="section-description">
          Découvrez tout ce que vous devez savoir sur les plantes pour les cultiver avec succès. Que vous soyez un jardinier débutant ou un expert, cette section vous fournira des informations précieuses pour améliorer vos compétences en jardinage.
        </p>
        <h3 className="sub-title">Conseils pour le Jardinage</h3>
        <ul className="tips-list">
          <li>Arrosez vos plantes régulièrement, mais évitez l'excès d'eau.</li>
          <li>Assurez-vous que vos plantes reçoivent suffisamment de lumière.</li>
          <li>Utilisez des engrais appropriés pour nourrir vos plantes.</li>
          <li>Protégez vos plantes des parasites et des maladies.</li>
          <li>Taillez les plantes mortes ou endommagées pour favoriser leur croissance.</li>
        </ul>
        <h3 className="sub-title">Types de Plantes</h3>
        <p className="section-description">
          Voici quelques types de plantes que vous pouvez cultiver dans votre jardin :
        </p>
        <ul className="types-list">
          <li>Plantes à fleurs (ex: Roses, Tulipes)</li>
          <li>Plantes aromatiques (ex: Basilic, Menthe)</li>
          <li>Plantes potagères (ex: Tomates, Carottes)</li>
          <li>Plantes succulentes (ex: Aloe Vera, Cactus)</li>
        </ul>
      </section>
      <div className="footer-container">
        <a href="/" className="back-link">Retour à l'accueil</a>
      </div>
    </div>
  );
}

export default PlantInfo;
