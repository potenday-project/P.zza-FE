import logo from '../images/logo.svg';
import home from '../images/home.svg';
import bomb from '../images/bomb.svg';
import ing from '../assets/icons/ing.svg';
import done from '../assets/icons/done.svg';
import stop from '../assets/icons/stop.svg';
import './Main.scss';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';

export function Main() {
  return (
    <div className="bg-gray">
      <header className="header">
        <img src={logo} />
        <img src={home} />
      </header>

      <div className="banner">
        <img src={bomb} />
        <div className="main-title">
          핏자와 함께 <span style={{ color: 'red' }}>쭈욱-! </span>
        </div>
        <div className="main-title">함께 늘어나고 성장해요</div>
      </div>
      <div className="chip-container">
        <div className="chip">전체</div>
        <div className="chip">
          <img src={ing} />
          모집중
        </div>
        <div className="chip">
          <img src={done} />
          완료
        </div>
        <div className="chip">
          <img src={stop} />
          중단
        </div>
      </div>

      <div class="project-section">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <ProjectCard></ProjectCard>
        ))}
      </div>
    </div>
  );
}
