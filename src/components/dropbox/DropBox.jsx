import './DropBox.scss';
import arrow from '../../assets/icons/down-arrow.svg';

export function DropBox() {
  return (
    <div className="drop-container">
      <div className="label">직무</div>
      <button className="dropbox">
        <input placeholder="선택" className="input"></input>
        <img src={arrow}></img>
      </button>
    </div>
  );
}
