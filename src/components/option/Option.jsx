import { useState } from 'react';
import './Option.scss';

export function Option({ children, onSelect, onClick, src, active }) {
  const [isClick, setIsClick] = useState(false);

  const handleChange = () => {
    onSelect(children);
    setIsClick(!isClick);
  };

  return (
    <div
      className={`option-container ${active ? 'clicked' : ''}`}
      onClick={onClick}
    >
      <img src={src} alt="option icon" />
      <div>{children}</div>
    </div>
  );
}
