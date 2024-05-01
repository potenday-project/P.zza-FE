import './Progress.scss';

export function Progress({ value, onClick }) {
  return (
    <div className="container">
      <div
        className={`circle ${value >= 1 ? 'colored' : ''}`}
        onClick={() => onClick(1)}
      >
        1
      </div>
      <div
        className={`circle ${value >= 2 ? 'colored' : ''}`}
        onClick={() => onClick(2)}
      >
        2
      </div>
      <div
        className={`circle ${value >= 3 ? 'colored' : ''}`}
        onClick={() => onClick(3)}
      >
        3
      </div>
    </div>
  );
}
