import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from '../../components/progress/Progress';
import { Button } from '../../components/button/Button';
import BasicInfoPage from './step1/Step1';
import SkillSelectionPage from './step2/Step2';
import ExperienceInputPage from './step3/Step3';
import CompletionPage from './step4/Step4';
import './SignUp.scss';
import { UserSignUp } from '../../api/project';

const USER_INITAIL = {
  role: '',
  portfolio_url: '',
  skills: [],
  experience: null,
};

function SignUp() {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const [isClick, setIsClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [userValue, setUserValue] = useState(USER_INITAIL);

  //console.log(userValue);

  const handleProgressClick = (newValue) => {
    setValue(newValue);
  };

  const handleChange = (name, value) => {
    const newValues = userValue;
    newValues[name] = value;
    setUserValue(newValues);
  };

  useEffect(() => {
    let isMounted = true;
    localStorage.setItem('user', []);

    const handleSignUp = async () => {
      try {
        setIsError(null);
        setIsLoading(true);
        const result = await UserSignUp(userValue); // 회원가입 API를 호출하는 함수
        if (isMounted) {
          console.log('회원가입 성공:', result);
          navigate('../mainpage');
        }
      } catch (error) {
        if (isMounted) {
          setIsError(error);
          console.error('회원가입 처리 중 오류 발생:', error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (value === 5) {
      localStorage.setItem('user', JSON.stringify(userValue));
      handleSignUp();
    }

    // 컴포넌트가 언마운트될 때 실행되는 정리 함수
    return () => {
      isMounted = false;
    };
  }, [value, userValue]); // value와 userValue의 변화를 감지

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
            setIsClick(true);
            setValue(value + 1);
          }}
        >
          {value === 4 ? '홈으로' : '다음'}
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
