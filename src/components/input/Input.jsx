import { useState } from 'react';
import './Input.scss';

export function Input({ children, value, placeholder, onChange }) {
  const [input, setInput] = useState(value);
  const handleInputChange = (e) => {
    setInput(e.target.value);
    onChange('portfolio_url', e.target.value);
  };
  return (
    <div className="input-container">
      <div className="label">{children}</div>
      <div className="inputbox">
        <input
          placeholder={placeholder}
          value={input}
          onChange={handleInputChange}
          className="input"
        ></input>
      </div>
    </div>
  );
}
