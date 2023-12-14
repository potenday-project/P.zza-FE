import { useNavigate } from 'react-router-dom';
import { TopNav } from '../../components/TopNav/TopNav';
import { useState } from 'react';
import { Button } from '../../components/button/Button';

export function TopicList() {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <TopNav>프로젝트 주제</TopNav>
      <div className="topic-container">
        <h3>
          00님을 위한
          <br />
          추천 프로젝트 주제입니다
        </h3>
        <p>주제 선정에 도움이 되셨으면 좋겠어요!</p>
        <div className="button-container">
          <Button
            className={`half-button ${isClick ? 'clicked' : ''}`}
            onClick={() => {
              navigate(-1);
              setIsClick(true);
            }}
          >
            이전
          </Button>
          <Button
            className={`half-button ${isClick ? 'clicked' : ''}`}
            onClick={() => {
              navigate(-1);
              setIsClick(true);
            }}
          >
            다음
          </Button>
        </div>
      </div>
    </>
  );
}
