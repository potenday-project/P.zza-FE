import logo from '../images/logo.svg';
import home from '../images/home.svg';
import bomb from '../images/bomb.svg';
import plus_icon from '../images/plus_icon.svg';
import ing from '../assets/icons/ing.svg';
import done from '../assets/icons/done.svg';
import stop from '../assets/icons/stop.svg';
import './Main.scss';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Main() {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState([false, false, false, false]);
  const [status, setStatus] = useState(0);
  return (
    <div className="bg-gray">
      <header className="header">
        <img src={logo} />
        <img src={home} onClick={() => navigate('../myproject')} />
      </header>

      <div className="banner">
        <img src={bomb} />
        <div className="main-title">
          핏자와 함께 <span style={{ color: 'red' }}>쭈욱-! </span>
        </div>
        <div className="main-title">함께 늘어나고 성장해요</div>
      </div>
      <div className="chip-container">
        <div
          className={`chip ${isClick[0] ? 'active' : ''}`}
          onClick={() => {
            const newClick = isClick.map(() => !isClick[0]);
            setIsClick(newClick);
          }}
        >
          전체
        </div>
        <div
          className={`chip ${isClick[1] ? 'active' : ''}`}
          onClick={() => {
            const newClick = [...isClick];
            newClick[1] = !newClick[1];
            if (newClick[0]) newClick[0] = !newClick[0];
            setIsClick(newClick);
            setStatus(1);
          }}
        >
          <img src={ing} />
          모집중
        </div>
        <div
          className={`chip ${isClick[2] ? 'active' : ''}`}
          onClick={() => {
            const newClick = [...isClick];
            newClick[2] = !newClick[2];
            if (newClick[0]) newClick[0] = !newClick[0];
            setIsClick(newClick);
            setStatus(2);
          }}
        >
          <img src={done} />
          완료
        </div>
        <div
          className={`chip ${isClick[3] ? 'active' : ''}`}
          onClick={() => {
            const newClick = [...isClick];
            newClick[3] = !newClick[3];
            if (newClick[0]) newClick[0] = !newClick[0];
            setIsClick(newClick);
            setStatus(3);
          }}
        >
          <img src={stop} />
          중단
        </div>
      </div>

      <div class="project-section">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <ProjectCard></ProjectCard>
        ))}
      </div>
      <AddProject></AddProject>
    </div>
  );
}

function AddProject() {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="add-container" onClick={() => navigate('../create-topic')}>
      <img className="add-icn" src={plus_icon}></img>
    </div>
  );
}
