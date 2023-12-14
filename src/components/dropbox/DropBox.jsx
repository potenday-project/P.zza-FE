import './DropBox.scss';
import arrow from '../../assets/icons/down-arrow.svg';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export function DropBox({ children, onClick, value }) {
  const [role, setRole] = useState(value);
  return (
    <div className="drop-container">
      <div className="label">{children}</div>
      <button className="dropbox" onClick={onClick}>
        <input
          value={role}
          readOnly={true}
          className="input"
          onChange={(e) => setRole(e.target.value)}
        ></input>
        <img src={arrow}></img>
      </button>
    </div>
  );
}
