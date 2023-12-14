import './Input.scss';

export function Input({ children, value, onChange }) {
  const handleInputChange = (e) => {
    if (onInputChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div className="input-container">
      <div className="label">{children}</div>
      <div className="inputbox">
        <input
          placeholder={value}
          onChange={(e) => {}}
          className="input"
        ></input>
      </div>
    </div>
  );
}
