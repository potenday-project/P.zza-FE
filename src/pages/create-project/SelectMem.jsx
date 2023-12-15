import optioncharac from '../../assets/icons/optioncharac.svg';
import active_optioncharac from '../../assets/icons/active_optioncharac.svg';
import { Step } from '../../components/step/Step';
import './SelectGuide.scss';
import { useState } from 'react';

export function SelectMem({ value }) {
  return (
    <div>
      <Step value={value}>어떤 팀원과 함께하고 싶나요?</Step>
      <div className="frame">
        <Option>BE개발</Option>
        <Option>FE개발</Option>
        <Option>기획</Option>
        <Option>디자인</Option>
      </div>
    </div>
  );
}
