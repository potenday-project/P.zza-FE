import { Step } from '../../../components/step/Step';
import { Option } from '../../../components/option/Option';
import './SelectGuide.scss';
import { useEffect, useState } from 'react';
import ten from '../../../../src/images/tenday.svg';
import activeten from '../../../../src/images/active-ten.svg';
import thirty from '../../../../src/images/thirtyday.svg';
import activethirty from '../../../../src/images/active-thirtyday.svg';

export function SelectGuide({ step, name, value, onChange }) {
  const [dayOption, setDayOption] = useState(value);
  const [btnClick, setBtnClick] = useState([false, false]);
  const [active, setActive] = useState([false, false]);
  const handleDayChange = (val) => {
    onChange(name, val);
  };

  return (
    <div>
      <Step value={step}>프로젝트 기간 및 가이드 선택</Step>
      <div className="frame">
        <Option
          onSelect={() => handleDayChange(10)}
          src={active[0] ? activeten : ten}
          active={active[0]}
          name={name}
          onClick={() => {
            const newActive = [...active];
            setActive([!newActive[0], newActive[0]]);
          }}
        >
          Day-10
        </Option>
        <Option
          onSelect={() => handleDayChange(30)}
          src={active[1] ? activethirty : thirty}
          active={active[1]}
          name={name}
          className={`select-btn ${btnClick[1] ? 'btn-clicked' : ''}`}
          onClick={() => {
            const newActive = [...active];
            setActive([newActive[1], !newActive[1]]);
          }}
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
