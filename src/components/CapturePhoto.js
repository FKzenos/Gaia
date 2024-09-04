import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import './CapturePhoto.css'; // Assurez-vous d'inclure ce fichier pour les styles

function CapturePhoto() {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();

  const capture = () => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
  };

  const handleConfirm = () => {
    if (imageSrc) {
      navigate('/confirmation', { state: { imageSrc } });
    }
  };

  return (
    <div className="capture-container">
      <h1 className="main-title">Capturez votre photo</h1>
      {imageSrc ? (
        <div className="image-preview">
          <img src={imageSrc} alt="Capture" className="captured-image" />
          <button className="confirm-button" onClick={handleConfirm}>Confirmer</button>
        </div>
      ) : (
        <div className="webcam-container">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
          />
          <button className="capture-button" onClick={capture}>Prendre la photo</button>
        </div>
      )}
    </div>
  );
}

export default CapturePhoto;
