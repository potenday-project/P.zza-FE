import pzza from '../images/pzza.svg';
import end from '../../src/images/end_charac.svg';

import './End.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/button/Button';

const End = () => {
  const navigate = useNavigate();
  return (
    <div className="end-bg">
      <div className="sub-title">
        이지원님,
        <br /> 완주를 축하합니다!
      </div>
      <div className="img-container">
        <img src={end} className="end"></img>
      </div>

      <Button className="button" onClick={() => {}}>
        완주 뱃지 받으러 가기
      </Button>
    </div>
  );
};

export default End;
