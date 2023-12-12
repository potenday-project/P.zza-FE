import React from 'react';

const SelectBox = ({ option, label }) => {
  const [selected, setSelected] = useState(option[0]);
  const [isOpen, setIsOpen] = useState(false);
  const onSelectedHandler = (e) => {
    const { value } = e.target;
    setSelected(value);
  };
  return (
    <div onClick={() => setIsOpen((s) => !s)}>
      <label htmlFor={label}>{label}</label>
      <p>{selected}</p>
      <ul id={label}>
        {option.map((item) => (
          <li key={item} value={item} onClick={onSelectedHandler}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectBox;
