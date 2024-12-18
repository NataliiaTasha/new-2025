import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../index.css";

const SceneTransition = ({ children, onTransitionEnd }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Анімація входу нової сцени
    gsap.fromTo(
      sceneRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    );
  }, [children]); // Виконується щоразу при зміні children

  const handleTransitionOut = () => {
    // Анімація виходу старої сцени
    gsap.to(sceneRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 1,
      onComplete: onTransitionEnd, // Після анімації викликається функція зміни сцени
    });
  };

  return (
    <div
      ref={sceneRef}
      className="scene-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {children}

      <button
        onClick={handleTransitionOut}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          zIndex: 10,
          padding: "10px 20px",
        }}
      >
        Next Scene
      </button>
    </div>
  );
};

export default SceneTransition;


