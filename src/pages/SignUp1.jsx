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
  console.log(value);
  return (
    <div className="sign-up-container">
      <Progress value={value}></Progress>
      <Step></Step>
      <div className="infombox">
        <Input value="홍길동">이름</Input>
        <DropBox></DropBox>
        <Input value="URL을 입력하세요">포트폴리오</Input>
      </div>
      <Button
        className={`button ${isClick ? 'clicked' : ''}`}
        onClick={() => {
          setValue(value + 1);
          setIsClick(true);
        }}
      >
        다음
      </Button>
    </div>
  );
};

export default SignUp1;
