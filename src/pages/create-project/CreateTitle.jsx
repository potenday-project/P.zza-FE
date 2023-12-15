import { useState } from 'react';
import { TopNav } from '../../components/TopNav/TopNav';
import { Step } from '../../components/step/Step';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import './CreateTitle.scss';

export function CreateTitle({ step, value, name, onChange }) {
  const [title, setTitle] = useState(value);
  const [isClick, setIsClick] = useState(false);
  const handleTitleChange = (name, val) => {
    setTitle(val);
    onChange(name, val);
  };
  return (
    <div>
      <Step value={step}>
        팀원 모집을 위한 <br /> 게시글 제목을 작성해주세요.
      </Step>

      <Input
        name={name}
        value={title}
        placeholder="입력해주세요"
        onChange={handleTitleChange}
      />

      <Button
        className={`button ${isClick ? 'clicked' : ''}`}
        onClick={() => {
          //  navigate('./topic-list');
          setIsClick(true);
        }}
      >
        확인
      </Button>
    </div>
  );
}
