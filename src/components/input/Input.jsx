import './Input.scss';

import { useState } from 'react';

import delete_icn from '../../assets/icons/input_delete.svg';

export function Input({
  children,
  value,
  name,
  placeholder,
  onChange,
  textarea,
}) {
  const [input, setInput] = useState(value);
  const [isClicked, setIsClicked] = useState(false);
  const handleInputChange = (e) => {
    setInput(e.target.value);
    onChange(e.target.name, e.target.value);
  };

  return (
    <div className="input-container">
      <div className="label">{children}</div>
      <div
        className={` ${textarea ? 'text-area-box' : 'inputbox'} ${
          isClicked || input ? 'input-active' : ''
        }`}
      >
        <input
          name={name}
          placeholder={placeholder}
          value={input}
          onChange={handleInputChange}
          className={`input ${isClicked || input ? 'input-active' : ''}`}
          onClick={() => setIsClicked(true)}
        />
        {input && (
          <img
            src={delete_icn}
            className="delete-icn"
            onClick={() => setInput('')}
          />
        )}
      </div>
    </div>
  );
}
