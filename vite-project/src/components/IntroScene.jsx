import React from 'react';
import { useNavigate } from 'react-router-dom';
import Snowfall from './SnowFall';

const IntroScene = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-scene">
      <Snowfall color="white" opacity={0.5} numFlakes={100} />
      <Snowfall color="white" opacity={0.8} numFlakes={50} />
      <h1>Welcome to the New Year's Adventure</h1>
      <p>Click below to start your magical journey through our immersive worlds.</p>
      <button onClick={() => navigate('/van-gogh')}>Start Adventure</button>
    </div>
  );
};

export default IntroScene;
