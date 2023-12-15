import { useNavigate } from 'react-router-dom';
import back from '../../assets/icons/back.svg';
import './TopNav.scss';

export function TopNav({ children }) {
  const navigate = useNavigate();
  return (
    <div className="topnav-container">
      <img src={back} className="back" onClick={() => navigate(-1)} />
      <h1 className="titles"> {children}</h1>
    </div>
  );
}