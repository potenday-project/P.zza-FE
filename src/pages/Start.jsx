import './Start.scss';

import { useNavigate } from 'react-router-dom';

import { userLogin } from '../api/project';
import character from '../images/character.svg';
import kakao from '../images/kakao.svg';
import pzza from '../images/pzza.svg';

const Start = () => {
  const navigate = useNavigate();

  const onCheckLogin = async () => {
    //카카오톡 로그인
    //  const CLIENT_ID = 'YOUR_KAKAO_CLIENT_ID'; // 카카오톡 앱의 클라이언트 ID
    //  const REDIRECT_URI = 'YOUR_KAKAO_REDIRECT_URI'; // 카카오톡 앱의 리디렉션 URI

    //  const handleLogin = () => {
    //    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    //    window.location.href = kakaoAuthURL;
    //  };

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
