import React, { useState } from 'react';
import { TopNav } from '../../components/TopNav/TopNav';
import { Button } from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import './TopicNo.scss';
import { useNavigate } from 'react-router-dom';

const INITIAL = Array.from({ length: 5 }, () => ({ recommendation: '' }));

export function TopicNo() {
  const [values, setValues] = useState(INITIAL);
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = { recommendation: value };
    setValues(newValues);
  };
  console.log(values);

  return (
    <div>
      <TopNav>프로젝트 주제</TopNav>
      <div className="topic-container">
        <h3>
          관심사를 키워드로 입력해보세요 <br /> AI가 주제를 추천해드립니다.
        </h3>
        <p>주제는 명사로 입력해주세요</p>
        <div>
          {INITIAL.map((item, i) => (
            <Input
              key={i}
              name="recommendation"
              value={values[i].recommendation}
              placeholder={`주제${1 + i}`}
              onChange={(name, value) => handleChange(i, value)}
            />
          ))}
        </div>
        <Button
          className={`button ${isClick ? 'clicked' : ''}`}
          onClick={() => {
            navigate('./topic-list');
            setIsClick(true);
          }}
        >
          확인
        </Button>
      </div>
    </div>
  );
}
