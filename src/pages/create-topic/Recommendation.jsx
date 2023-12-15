import { useNavigate } from 'react-router-dom';
import { TopNav } from '../../components/TopNav/TopNav';
import { useState } from 'react';
import { Button } from '../../components/button/Button';
import recommend_charac from '../../images/recommend_charac.svg';

import './Recommendation.scss';
import { TopicKeyword } from './TopicKeyword';

export function Recommendation() {
  const [isClick, setIsClick] = useState(false);
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const render = () => {
    switch (value) {
      case 1:
        return <TopicKeyword></TopicKeyword>;
      case 2:
        return <OutPut></OutPut>;
    }
  };
  return (
    <>
      <TopNav setValueStep={setValue} step={value}>
        프로젝트 주제
      </TopNav>
      <div className="topic-container">{render()}</div>
      <div className="button-container">
        <Button
          className={`half-button ${isClick ? 'clicked' : ''}`}
          onClick={() => {
            navigate(value == 1 && '../create-topic');
            setValue(value - 1);
            setIsClick(true);
          }}
        >
          이전
        </Button>
        <Button
          className={`half-button ${isClick ? 'clicked' : ''}`}
          onClick={() => {
            setIsClick(true);
            setValue(value + 1);
            navigate(value === 2 && '../create-project');
          }}
        >
          다음
        </Button>
      </div>
    </>
  );
}

function OutPut() {
  return (
    <>
      <div className="keyword-title">
        00님을 위한
        <br />
        추천 프로젝트 주제입니다
      </div>
      <p>주제 선정에 도움이 되셨으면 좋겠어요!</p>
      <div className="center-box">
        <div className="recommend-box">
          <div className="recommend">
            <p>d</p>
          </div>
          <div className="recommend">
            <p>d</p>
          </div>
          <div className="recommend">
            <p>d</p>
          </div>
        </div>
        <img src={recommend_charac} className="recommend_charac"></img>
      </div>
    </>
  );
}
