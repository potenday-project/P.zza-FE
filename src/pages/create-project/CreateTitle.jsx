import { useState } from 'react';
import { TopNav } from '../../components/TopNav/TopNav';
import { Step } from '../../components/step/Step';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import './CreateTitle.scss';

export function CreateTitle({ value }) {
  const [title, setTitle] = useState({ title: '' });
  const [isClick, setIsClick] = useState(false);
  const handleTitleChange = (name, value) => {
    setTitle({ title: value });
  };
  return (
    <div>
      <Step value={value}>
        팀원 모집을 위한 <br /> 게시글 제목을 작성해주세요.
      </Step>

      <Input
        name="title"
        value={title.title}
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
