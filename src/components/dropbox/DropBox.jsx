import './DropBox.scss';
import arrow from '../../assets/icons/down-arrow.svg';
import { useState } from 'react';

export function DropBox({ children, onClick, onChange, value }) {
  const [role, setRole] = useState(value);
  return (
    <div className="drop-container">
      <div className="label">{children}</div>
      <button className="dropbox" onClick={onClick}>
        <input
          value={value}
          readOnly={true}
          className="input"
          onChange={(e) => setRole(e.target.value)}
        ></input>
        <img src={arrow}></img>
      </button>
    </div>
  );
}
