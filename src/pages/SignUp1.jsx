import React, { useState } from 'react';
import { Progress } from '../components/progress/Progress';

import { Button } from '../components/button/Button';
import './SignUp1.scss';

import BasicInfoPage from './step1/Step1';
import SkillSelectionPage from './step2/Step2';
import ExperienceInputPage from './step3/Step3';
import CompletionPage from './step4/Step4';
import { useNavigate } from 'react-router-dom';

const SignUp1 = () => {
  const [value, setValue] = useState(1);
  const [isClick, setIsClick] = useState(false);

  const navigate = useNavigate();

  const handleProgressClick = (newValue) => {
    setValue(newValue);
    // 다른 작업을 수행하고 싶다면 여기에 추가
  };

  const renderContent = () => {
    switch (value) {
      case 1:
        return <BasicInfoPage value={value} />;
      case 2:
        return <SkillSelectionPage value={value} />;
      case 3:
        return <ExperienceInputPage value={value} />;
      case 4:
        return <CompletionPage />;
      case 5:
        navigate('../mainpage');
      default:
        return null;
    }
  };
  return (
    <div className="sign-up-container">
      {value < 4 && (
        <Progress value={value} onClick={handleProgressClick}></Progress>
      )}
      <div>
        {renderContent()}
        <Button
          className={`button ${isClick ? 'clicked' : ''}`}
          onClick={() => {
            setValue(value + 1);
            setIsClick(true);
          }}
        >
          {value === 4 ? '홈으로' : '다음'}
        </Button>
      </div>
    </div>
  );
};

export default SignUp1;
