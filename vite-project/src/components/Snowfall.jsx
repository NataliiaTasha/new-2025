import React, { useRef, useEffect } from "react";

const Snowfall = ({ color = "white", opacity = 1, numFlakes = 100 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Setting Canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Snowflakes creation
    const snowflakes = Array.from({ length: numFlakes }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1,
      drift: Math.random() * 0.5 - 0.25,
    }));

    // Snow animation
    const animateSnow = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;

      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();

        flake.y += flake.speed;
        flake.x += flake.drift;

        if (flake.y > canvas.height) flake.y = -flake.radius;
        if (flake.x > canvas.width || flake.x < 0) flake.x = Math.random() * canvas.width;
      });

      requestAnimationFrame(animateSnow);
    };

    animateSnow();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [color, opacity, numFlakes]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999, 
      }}
    ></canvas>
  );
};

export default Snowfall;
