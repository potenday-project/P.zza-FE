import './Input.scss';

export function Input({ children, value }) {
  return (
    <div className="input-container">
      <div className="label">{children}</div>
      <div className="inputbox">
        <input placeholder={value} className="input"></input>
      </div>
    </div>
  );
}
