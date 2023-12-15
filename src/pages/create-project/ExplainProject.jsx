import { useState } from 'react';
import { TopNav } from '../../components/TopNav/TopNav';
import { Step } from '../../components/step/Step';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import './CreateTitle.scss';

export function ExplainProject({ step }) {
  const [title, setTitle] = useState({ title: '' });
  const [isClick, setIsClick] = useState(false);
  const handleTitleChange = (name, value) => {
    setTitle({ title: value });
  };
  return (
    <div>
      <Step value={step}>프로젝트 소개글을 작성해주세요</Step>

      <Input
        name="title"
        value={title.title}
        placeholder="입력해주세요"
        onChange={handleTitleChange}
      >
        소개
      </Input>
      <Input
        name="title"
        value={title.title}
        placeholder="입력해주세요"
        onChange={handleTitleChange}
      >
        소통 채널
      </Input>

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
