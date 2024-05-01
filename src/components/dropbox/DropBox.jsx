import './DropBox.scss';

import { useState } from 'react';

import arrow from '../../assets/icons/down-arrow.svg';

export function DropBox({ children, onClick, onChange, value, placeholder }) {
  const [role, setRole] = useState(value);

  const handleChange = (e) => {
    setRole(e.target.value);
    onChange(e.target.name, e.target.value);
  };
  return (
    <div className="drop-container">
      <div className="label">{children}</div>
      <button className="dropbox" onClick={onClick}>
        <input
          value={value}
          readOnly={true}
          placeholder={placeholder}
          className="input"
          onChange={handleChange}
        ></input>
        <img src={arrow}></img>
      </button>
    </div>
  );
}
