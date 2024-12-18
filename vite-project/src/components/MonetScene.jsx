import React, { useState } from 'react';
import lilyImage from '../assets/images/frozen-lily.jpg'; // Зображення лілії

const MonetScene = ({ onComplete }) => {
  const [unfrozen, setUnfrozen] = useState(false);

  const handleClick = () => {
    setUnfrozen(true);
  };

  return (
    <div className="monet-scene">
      <img
        src={lilyImage}
        alt="Frozen Lily"
        className={unfrozen ? 'unfrozen' : ''}
        onClick={handleClick}
      />
      {unfrozen && <p>The lilies bloom for a bright new year!</p>}
      <button onClick={onComplete}>Next</button>
    </div>
  );
};

export default MonetScene;
