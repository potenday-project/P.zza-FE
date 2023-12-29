import { useState } from 'react';
import './ProjectCard.scss';

export function ProjectCard({ id, status, name, desc, mem }) {
  return (
    <div className="card-container">
      <div className="elements">
        <div className="pj-header">
          <span
            className={`${status === 'recruitment-completed' && 'done'} ${
              status === 'interruption' && 'stop'
            }`}
          >
            {status === 'recruitment-completed' && '완료'}
            {status === 'interruption' && '중단'}
            {status === 'recruiting' && '진행중'}
          </span>
          <div className="pj-title">{name} </div>
        </div>
        <p className="pj-desc">{desc}</p>
        <div className="position-container">
          {mem.map((each, i) => (
            <span
              key={i}
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
