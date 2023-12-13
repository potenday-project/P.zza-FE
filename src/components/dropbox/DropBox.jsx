import './DropBox.scss';
import arrow from '../../assets/icons/down-arrow.svg';

export function DropBox({ onClick }) {
  return (
    <div className="drop-container">
      <div className="label">직무</div>
      <button className="dropbox" onClick={onClick}>
        <input placeholder="선택" className="input"></input>
        <img src={arrow}></img>
      </button>
    </div>
  );
}
