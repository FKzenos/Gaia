import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CapturePhoto from './components/CapturePhoto';
import Confirmation from './components/Confirmation';
import PlantInfo from './components/PlantInfo';
import ProjectOverview from './components/ProjectOverview';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capture" element={<CapturePhoto />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/plant-info" element={<PlantInfo />} />
        <Route path="/project-overview" element={<ProjectOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
