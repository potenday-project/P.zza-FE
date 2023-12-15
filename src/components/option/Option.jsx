import optioncharac from '../../assets/icons/optioncharac.svg';
import active_optioncharac from '../../assets/icons/active_optioncharac.svg';
import { useState } from 'react';
import './Option.scss';

export function Option({ children, onSelect }) {
  const [isClick, setIsClick] = useState(false);

  const handleChange = () => {
    onSelect(children);
    setIsClick(!isClick);
  };

  return (
    <div
      className={`option-container ${isClick ? 'clicked' : ''}`}
      onClick={handleChange}
    >
      <img
        src={isClick ? active_optioncharac : optioncharac}
        alt="option icon"
      />
      <div>{children}</div>
    </div>
  );
}
