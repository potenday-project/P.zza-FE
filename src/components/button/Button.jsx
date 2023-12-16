import { Navigate, useNavigate } from 'react-router-dom';
import './Button.scss';
import { useState } from 'react';

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
