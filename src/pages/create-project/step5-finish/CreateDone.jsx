import './CreateDone.scss';
import project from '../../../assets/icons/project_icon.svg';

export function CreateDone() {
  return (
    <div className="done-container">
      <h4 className="done-text">
        완성!
        <br />
        생성된 프로젝트를 확인해보세요
      </h4>
      <img className="project-img" src={project} />
    </div>
  );
}
