import { TopNav } from '../../components/TopNav/TopNav';
import './TopicYesNo.scss';
import topic_charac from '../../images/topic_charac.svg';
import { Button } from '../../components/button/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function TopicYesNo() {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <TopNav>프로젝트 주제</TopNav>
      <div className="topic-bg">
        <div className="topic-title">
          <h3>프로젝트 주제를 선정하셨나요?</h3>
          <p>주제가 없으면 저희가 도와드릴게요 !</p>
        </div>

        <img src={topic_charac} className="image"></img>
        <Link to="/topic-no">
          <Button className={`select-btn ${isClick ? 'clicked' : ''}`}>
            정했어요!
          </Button>
        </Link>
        <Button className={`select-btn ${isClick ? 'clicked' : ''}`}>
          정하지 못했어요
        </Button>
      </div>
    </>
  );
}
