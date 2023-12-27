import pzza from '../images/pzza.svg';
import character from '../images/character.svg';
import kakao from '../images/kakao.svg';
import './Start.scss';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../api/project';

const Start = () => {
  const navigate = useNavigate();

  const onCheckLogin = async () => {
    const storedAccessKey = localStorage.getItem('ACCESS_KEY');
    if (storedAccessKey) {
      // 로컬스토리지에서 ACCESS_KEY 추출
      const access_key = JSON.parse(storedAccessKey);
      try {
        await userLogin(access_key);
        navigate('/mainpage');
      } catch (error) {
        console.error('로그인 오류발생:', error);
      }
    } else {
      navigate('/sign-up');
    }
  };

  return (
    <div className="bg">
      <div className="sub-title">project hazza</div>
      <img src={pzza} className="pzza"></img>
      <img src={character} className="character"></img>
      <div className="kakao-btn-container">
        <button className="kakao-btn" onClick={onCheckLogin}>
          <img src={kakao}></img>
        </button>
      </div>
    </div>
  );
};

export default Start;
