import { Step } from '../../../components/step/Step';
import { Option } from '../../../components/option/Option';
import './SelectGuide.scss';
import { useEffect, useState } from 'react';
import ten from '../../../../src/images/tenday.svg';
import activeten from '../../../../src/images/active-ten.svg';
import thirty from '../../../../src/images/thirtyday.svg';
import activethirty from '../../../../src/images/active-thirtyday.svg';

export function SelectGuide({ step, name, value, onChange }) {
  const [active, setActive] = useState([false, false]);

  const handleSelect = (selectedIndex) => {
    const newActive = active.map((_, idx) => idx === selectedIndex);
    setActive(newActive);
    const selectedValue = selectedIndex === 0 ? 10 : 30;
    onChange(name, selectedValue);
  };

  return (
    <div>
      <Step value={step}>프로젝트 기간 및 가이드 선택</Step>
      <div className="frame">
        <Option
          onSelect={() => handleSelect(0)} //콜백형태-> 이벤트가 실제 발생했을 떄만 함수 호출
          src={active[0] ? activeten : ten}
          active={active[0]}
          name={name}
        >
          Day-10
        </Option>
        <Option
          onSelect={() => handleSelect(1)}
          src={active[1] ? activethirty : thirty}
          active={active[1]}
          name={name}
        >
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
