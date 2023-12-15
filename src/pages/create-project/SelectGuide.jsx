import { Step } from '../../components/step/Step';
import { Option } from '../../components/option/Option';
import './SelectGuide.scss';
import { useEffect, useState } from 'react';

export function SelectGuide({ step, name, value, onChange }) {
  const [dayOption, setDayOption] = useState(value);
  const handleDayChange = (val) => {
    setDayOption(val);
    onChange(name, val);
  };

  return (
    <div>
      <Step value={step}>프로젝트 기간 및 가이드 선택</Step>
      <div className="frame">
        <Option onSelect={handleDayChange} name={name}>
          Day-10
        </Option>
        <Option onSelect={handleDayChange} name={name}>
          Day-30
        </Option>
      </div>
      <div className="message">
        <h4> 1.요구사항 정리</h4>
        <p>
          고객이 누군가요? 고객이 느끼는 불편함에는 어떤 게 있나요? 고객의
          요구사항을 정리해보세요.
        </p>
      </div>
    </div>
  );
}
