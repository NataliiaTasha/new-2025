import React, { useState } from "react";
import SceneTransition from "./components/SceneTransition";
import IntroScene from "./components/IntroScene";
import VanGoghScene from "./components/VanGoghScene";
import MonetScene from "./components/MonetScene";

const App = () => {
  const [currentScene, setCurrentScene] = useState(0);

  // Масив зі сценами
  const scenes = [
    <IntroScene key="intro" />,
    <VanGoghScene key="vangogh" />,
    <MonetScene key="monet" />,
  ];

  // Функція для переходу до наступної сцени
  const handleSceneChange = () => {
    setCurrentScene((prevScene) => (prevScene + 1) % scenes.length);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <SceneTransition onTransitionEnd={handleSceneChange}>
        {scenes[currentScene]}
      </SceneTransition>
    </div>
  );
};

export default App;


