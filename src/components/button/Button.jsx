import './Button.scss';

export function Button({ children, onClick, className, more }) {
  return (
    <div className="btn-container">
      <button className={className} onClick={onClick}>
        {children}
      </button>
      {more && (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
}
