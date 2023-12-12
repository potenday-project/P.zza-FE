import pzza from '../images/pzza.svg';
import character from '../images/character.svg';
import kakao from '../images/kakao.svg';
import './Start.scss';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="bg">
      <div className="sub-title">project hazza</div>
      <img src={pzza}></img>
      <img src={character} className="character"></img>
      <button className="kakao-btn" onClick={() => navigate('/sign-up-1')}>
        <img src={kakao}></img>
      </button>
    </div>
  );
};

export default Start;
