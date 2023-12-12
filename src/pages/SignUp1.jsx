import React, { useState } from 'react';
import { Progress } from '../components/progress/Progress';
import { Step } from '../components/step/Step';
import { Input } from '../components/input/Input';
import { DropBox } from '../components/dropbox/DropBox';
import { Button } from '../components/button/Button';
import './SignUp1.scss';

const SignUp1 = () => {
  const [value, setValue] = useState(1);
  const [isClick, setIsClick] = useState(false);

  const renderContent = () => {
    switch (value) {
      case 1:
        return (
          <div>
            <Progress value={value}></Progress>
            <Step value={value}> 기본 정보를 입력해주세요</Step>
            <div className="infobox">
              <Input value="홍길동">이름</Input>
              <DropBox></DropBox>
              <Input value="URL을 입력하세요">포트폴리오</Input>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <Progress value={value}></Progress>
            <Step value={value}>보유하신 스킬을 선택해주세요</Step>
            <div className="infobox"></div>
          </div>
        );
      case 3:
        return (
          <div>
            <Progress value={value}></Progress>
            <Step value={value}>경력을 입력해주세요</Step>
            <div className="infobox">
              <DropBox></DropBox>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-container">
            <div>프로필 작성이 완료되었어요!</div>
            <div>
              이제 원하는 프로젝트를 <br />
              찾아보세요
            </div>
            <p>프로젝트는 최대 3개까지 지원할 수 있습니다</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="sign-up-container">
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
  );
};

export default SignUp1;
