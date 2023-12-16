import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from '../../components/progress/Progress';
import { Button } from '../../components/button/Button';
import BasicInfoPage from './step1/Step1';
import SkillSelectionPage from './step2/Step2';
import ExperienceInputPage from './step3/Step3';
import CompletionPage from './step4/Step4';
import './SignUp.scss';

const USER_INITAIL = {
  role: '',
  portfolio_url: '',
  skills: [],
  experience: '',
};

function SignUp() {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const [isClick, setIsClick] = useState(false);
  const [userValue, setUserValue] = useState(USER_INITAIL);
  const handleProgressClick = (newValue) => {
    setValue(newValue);
  };

  const handleChange = (name, value) => {
    const newValues = userValue;
    newValues[name] = value;
    setUserValue(newValues);
    // console.log(newValues);
  };

  useEffect(() => {
    localStorage.setItem('user', []);
    if (value === 5) {
      localStorage.setItem('user', JSON.stringify(userValue));
    }
  }, [value, userValue]);

  const renderContent = () => {
    switch (value) {
      case 1:
        return (
          <BasicInfoPage
            value={value}
            role_name="role"
            portfolio_name="portfolio_url"
            role={userValue.role}
            portfolio={userValue.portfolio_url}
            onRoleChange={handleChange}
            onPortfolioChange={handleChange}
          />
        );
      case 2:
        return (
          <SkillSelectionPage
            value={value}
            name="skills"
            skills={userValue.skills}
            onChange={handleChange}
          />
        );
      case 3:
        return (
          <ExperienceInputPage
            value={value}
            name="experience"
            experience={userValue.experience}
            onChange={handleChange}
          />
        );
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
            if (value === 5) {
              let user = JSON.parse(localStorage.getItem('user'));
              console.log(user);
            }
          }}
        >
          {value === 4 ? '홈으로' : '다음'}
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
