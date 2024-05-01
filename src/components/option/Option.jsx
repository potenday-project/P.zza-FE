import './Option.scss';

import { useState } from 'react';

export function Option({ children, onSelect, src, active, className }) {
  const [isClick, setIsClick] = useState(false);
  const [colors, setColors] = useState(className);

  const handleChange = (index) => {
    onSelect(index);
    setIsClick(!isClick);
    setColors(className);
    console.log(className);
  };

  return (
    <div
      className={`option-container ${active ? 'clicked' : ''} ${
        isClick ? colors : ''
      }`}
      onClick={handleChange}
    >
      <img src={src} alt="option icon" />
      <div>{children}</div>
    </div>
  );
}
