import './TopicKeyword.scss';

import React, { useState } from 'react';

import { Input } from '../../components/input/Input';

const INITIAL = Array.from({ length: 5 }, () => ({ recommendation: '' }));

export function TopicKeyword() {
  const [values, setValues] = useState(INITIAL);

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = { recommendation: value };
    setValues(newValues);
  };

  return (
    <div>
      <div className="keyword-title">
        관심사를 키워드로 입력해보세요 <br /> AI가 주제를 추천해드립니다.
      </div>
      <p>주제는 명사로 입력해주세요</p>
      <div className="keyword-box">
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
    </div>
  );
}
