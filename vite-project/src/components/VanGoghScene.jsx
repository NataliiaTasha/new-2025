import React, { useState, useEffect, useRef } from "react";
import "../styles/VanGoghScene.css";
import vangogh from "../assets/images/vangogh.png";
import vangoghSnow from "../assets/images/vangogh-snow.png";
import vangoghTree from "../assets/images/vangogh-tree.png";
import Snowfall from "./SnowFall";

const VanGoghScene = () => {
  const [showSnowLayer, setShowSnowLayer] = useState(false);
  const [showTreeDecorations, setShowTreeDecorations] = useState(false);
  const containerRef = useRef(null);

  const handleImageLoad = () => {
    setTimeout(() => setShowSnowLayer(true), 2000);
    setTimeout(() => setShowTreeDecorations(true), 5500); 
  };

  return (
    <div className="scene-container" ref={containerRef}>
      {/* Main image */}
      <img
        src={vangogh}
        alt="Van Gogh Scene"
        className="scene-image"
        onLoad={handleImageLoad} // Initializing Canvas after downloading
      />

      {/* Falling snow with customizable parameters */}
      <Snowfall color="white" opacity={0.5} numFlakes={100} />
      <Snowfall color="white" opacity={0.8} numFlakes={50} />

      {/* Layer with static snow */}
      {showSnowLayer && (
        <img src={vangoghSnow} alt="Snow Layer" className="fading-slow" />
      )}

      {/* Layer with decorations */}
      {showTreeDecorations && (
        <img src={vangoghTree} alt="Tree Decorations" className="fading-fast" />
      )}
    </div>
  );
};

export default VanGoghScene;










