import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import IntroScene from './components/IntroScene';
import VanGoghScene from './components/VanGoghScene';
import MonetScene from './components/MonetScene';

const App = () => {
  const handleSceneTransition = () => {
    gsap.to('.scene', { opacity: 0, duration: 1, onComplete: () => window.scrollTo(0, 0) });
  };

  return (
    <Router>
      <div className="scene">
        <Routes>
          <Route path="/" element={<IntroScene />} />
          <Route path="/van-gogh" element={<VanGoghScene onComplete={handleSceneTransition} />} />
          <Route path="/monet" element={<MonetScene onComplete={handleSceneTransition} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
