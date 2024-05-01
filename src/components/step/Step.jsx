import './Step.scss';

export function Step({ children, value }) {
  return (
    <div className="step-container">
      <div className="step">STEP{value}</div>
      <div className="text"> {children}</div>
    </div>
  );
}
