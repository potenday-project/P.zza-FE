import { useState } from 'react';
import './Progress.scss';

export function Progress({ value }) {
  return (
    <div className="container">
      <div className={`circle ${value === 1 ? 'colored' : ''}`}>1</div>
      <div className={`circle ${value === 2 ? 'colored' : ''}`}>2</div>
      <div className={`circle ${value === 3 ? 'colored' : ''}`}>3</div>
    </div>
  );
}
