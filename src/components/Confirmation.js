import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Confirmation.css'; // Assurez-vous de créer ce fichier pour les styles

function Confirmation() {
  const location = useLocation();
  const { imageSrc } = location.state || {};

  return (
    <div className="confirmation-container">
      <h1 className="main-title">Confirmation</h1>
      {imageSrc ? (
        <div className="confirmation-content">
          <p className="confirmation-message">Votre photo a été capturée avec succès !</p>
          <img src={imageSrc} alt="Captured" className="captured-image" />
        </div>
      ) : (
        <p className="no-photo">Aucune photo capturée.</p>
      )}
      <div className="plant-advice-section">
        <h2 className="advice-title">Conseils pour vos plantes</h2>
        <p className="advice-text">
          Voici quelques conseils pour prendre soin de vos plantes :
          <ul>
            <li>Arrosez régulièrement, mais sans excès.</li>
            <li>Assurez-vous que vos plantes reçoivent suffisamment de lumière.</li>
            <li>Utilisez des engrais appropriés pour chaque type de plante.</li>
            <li>Surveillez les signes de maladies ou de parasites.</li>
          </ul>
        </p>
      </div>
      <Link to="/">
        <button className="back-button">Retour à l'accueil</button>
      </Link>
    </div>
  );
}

export default Confirmation;
