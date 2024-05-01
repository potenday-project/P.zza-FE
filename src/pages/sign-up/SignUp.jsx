import './SignUp.scss';

import React, {
  useEffect,
  useState,
} from 'react';

import { useNavigate } from 'react-router-dom';

import { UserSignUp } from '../../api/project';
import { Button } from '../../components/button/Button';
import { Progress } from '../../components/progress/Progress';
import BasicInfoPage from './step1/Step1';
import SkillSelectionPage from './step2/Step2';
import ExperienceInputPage from './step3/Step3';
import CompletionPage from './step4/Step4';

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

  const handleProgressClick = (newValue) => {
    setValue(newValue);
  };

  const handleChange = (name, value) => {
    setUserValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    localStorage.setItem('user', []);

    const handleSignUp = async () => {
      try {
        setIsError(null);
        setIsLoading(true);
        const result = await UserSignUp(userValue);
        if (result.success) {
          console.log('회원가입 성공:', result);
          navigate('../mainpage');
        }
      } catch (error) {
        setIsError(error);
        console.error('회원가입 처리 중 오류 발생:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (value === 5) {
      localStorage.setItem('user', JSON.stringify(userValue));
      handleSignUp();
    }
    switch (value) {
      case 1:
        setIsClick(userValue.role); // role이 선택되었는지 여부
        break;
      case 2:
        setIsClick(userValue.skills.length > 0); // skills가 하나 이상 선택되었는지 여부
        break;
      case 3:
        setIsClick(userValue.experience); // experience가 입력되었는지 여부
        break;
      case 4:
        setIsClick(true); // experience가 입력되었는지 여부
        break;
      default:
        setIsClick(false);
    }
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
            if (value === 1) {
              if (!userValue.role) {
                alert('직무를 선택하세요');
              } else {
                setValue(value + 1);
              }
            }
            if (value === 2) {
              if (userValue.skills.length === 0) {
                alert('1개 이상 스킬을 선택해주세요');
              } else {
                setValue(value + 1);
              }
            }
            if (value === 3) {
              if (!userValue.experience) {
                alert('경력을 입력하세요');
              } else {
                setValue(value + 1);
              }
            } else {
              setValue(value + 1);
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
