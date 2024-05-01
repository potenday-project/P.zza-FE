import './CreateTopic.scss';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/button/Button';
import Header from '../../components/elements/Header';
import topic_charac from '../../images/topic_charac.svg';

export function CreateTopic() {
  const [btnClick, setBtnClick] = useState([false, false]);
  const navigate = useNavigate();
  return (
    <>
      <Header title="프로젝트 주제" />
      <div className="topic-bg">
        <div className="topic-title">
          <h3>프로젝트 주제를 선정하셨나요?</h3>
          <p>주제가 없으면 저희가 도와드릴게요 !</p>
        </div>
        <div className="image">
          <img src={topic_charac} />
        </div>
        <div className="selectbtn-container">
          <Button
            className={`select-btn ${btnClick[0] ? 'btn-clicked' : ''}`}
            more={true}
            onClick={() => {
              const newArray = [...btnClick]; // 배열의 복사본 생성
              newArray[0] = true; // 0번 인덱스 값을 수정
              setBtnClick(newArray); // 상태 업데이트

              setTimeout(() => {
                navigate('../create-project');
              }, 200);
            }}
          >
            정했어요!
          </Button>

          <Button
            className={`select-btn ${btnClick[1] ? 'btn-clicked' : ''}`}
            onClick={() => {
              const newArray = [...btnClick];
              newArray[1] = true;
              setBtnClick(newArray);

              setTimeout(() => {
                navigate('./keyword');
              }, 200);
            }}
          >
            정하지 못했어요
          </Button>
        </div>
      </div>
    </>
  );
}
