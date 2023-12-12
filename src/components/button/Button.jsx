import { Navigate, useNavigate } from 'react-router-dom';
import './Button.scss';
import { useState } from 'react';

export function Button({ children, onClick, className, value }) {
  const navigate = useNavigate();
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
