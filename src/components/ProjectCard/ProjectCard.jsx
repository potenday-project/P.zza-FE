import { useState } from 'react';
import './ProjectCard.scss';

export function ProjectCard({ id, status, name, desc, mem }) {
  return (
    <div className="card-container">
      <div class="elements">
        <div className="pj-header">
          <span
            className={`${status === '완료' && 'done'} ${
              status === '중단' && 'stop'
            }`}
          >
            {status}
          </span>
          <div className="pj-title">{name} </div>
        </div>
        <p className="pj-desc">{desc}</p>
        <div className="position-container">
          {mem.map((each) => (
            <span
              key={id}
              className={`position ${
                each.participants === each.recruitment_target && 'over'
              }`}
            >
              {each.role} {each.participants} / {each.recruitment_target}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
