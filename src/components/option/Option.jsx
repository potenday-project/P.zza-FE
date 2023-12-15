import optioncharac from '../../assets/icons/optioncharac.svg';
import active_optioncharac from '../../assets/icons/active_optioncharac.svg';
import { Step } from '../../components/step/Step';
import './Option.scss';
import { useState } from 'react';

export function Option({ children }) {
  const [isClick, setISClick] = useState(false);
  return (
    <div
      className={`option-container ${isClick ? 'clicked' : ''}`}
      onClick={() => setISClick(!isClick)}
    >
      <img src={isClick ? active_optioncharac : optioncharac} />
      <div>{children}</div>
    </div>
  );
}
