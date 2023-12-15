import { useNavigate } from 'react-router-dom';
import back from '../../assets/icons/back.svg';
import './TopNav.scss';

export function TopNav({ children, setValueStep, step }) {
  const navigate = useNavigate();

  return (
    <div className="topnav-container">
      {step && <img src={back} className="back" onClick={() => {}} />}
      <h1 className="titles">{children}</h1>
    </div>
  );
}
