import { TopNav } from '../../components/TopNav/TopNav';
import './CreateTopic.scss';
import topic_charac from '../../images/topic_charac.svg';
import { Button } from '../../components/button/Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function CreateTopic() {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Header title="프로젝트 주제"></Header>
      <div className="topic-bg">
        <div className="topic-title">
          <h3>프로젝트 주제를 선정하셨나요?</h3>
          <p>주제가 없으면 저희가 도와드릴게요 !</p>
        </div>

        <img src={topic_charac} className="image"></img>

        <Button
          className={`select-btn ${isClick ? 'clicked' : ''}`}
          onClick={() => {
            setIsClick(true);
            navigate('../create-project');
          }}
        >
          정했어요!
        </Button>

        <Button
          className={`select-btn ${isClick ? 'clicked' : ''}`}
          onClick={() => {
            setIsClick(true);
            navigate('./keyword');
          }}
        >
          정하지 못했어요
        </Button>
      </div>
    </>
  );
}
