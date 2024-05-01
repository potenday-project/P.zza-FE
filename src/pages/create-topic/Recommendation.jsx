import './Recommendation.scss';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Header from '../../components/elements/Header';
import recommend_charac from '../../images/recommend_charac.svg';
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
      <Header title="프로젝트 주제"></Header>
      <div className="topic-container">{render()}</div>
      <div className="button-container">
        <button
          className={`half-btn ${isClick ? 'clicked' : ''}`}
          onClick={() => {
            navigate(value == 1 && '../create-topic');
            setValue(value - 1);
            setIsClick(true);
          }}
        >
          이전
        </button>
        <button
          className={`half-btn  ${isClick ? 'clicked' : ''}`}
          onClick={() => {
            setIsClick(true);
            setValue(value + 1);
            navigate(value === 2 && '../create-project');
          }}
        >
          다음
        </button>
      </div>
    </>
  );
}

function OutPut() {
  return (
    <>
      <div className="keyword-title">
        <span style={{ color: '#FF570E' }}>이지원</span> 님을 위한
        <br />
        추천 프로젝트 주제입니다
      </div>
      <p>주제 선정에 도움이 되셨으면 좋겠어요!</p>
      <div className="center-box">
        <div className="recommend-box">
          <div className="recommend">
            <p>여행 일정 생성 서비스 </p>
          </div>
          <div className="recommend">
            <p>여행 경비 계산 서비스</p>
          </div>
          <div className="recommend">
            <p>여행 장소 공유 서비스</p>
          </div>
        </div>
        <img src={recommend_charac} className="recommend_charac"></img>
      </div>
    </>
  );
}
