import { TopNav } from '../../components/TopNav/TopNav';
import optioncharac from '../../assets/icons/optioncharac.svg';
import { useState } from 'react';
import { Step } from '../../components/step/Step';
import { Button } from '../../components/button/Button';
import { SelectGuide } from './SelectGuide';
import { CreateTitle } from './CreateTitle';
import { SelectMem } from './SelectMem';

export function CreateProject() {
  const [value, setValue] = useState(1);
  const [isClick, setIsClick] = useState(false);

  const renderContent = () => {
    switch (value) {
      case 1:
        return <CreateTitle value={value} />;
      case 2:
        return <SelectGuide value={value} />;
      case 3:
        return <SelectMem value={value} />;
      case 4:
        return <SelectMem value={value} />;
      default:
        return null;
    }
  };
  return (
    <>
      <TopNav>프로젝트 생성</TopNav>
      <div className="topic-container">{renderContent()}</div>
      <Button
        className={`button ${isClick ? 'clicked' : ''}`}
        onClick={() => {
          setValue(value + 1);
          setIsClick(true);
        }}
      >
        확인
      </Button>
    </>
  );
}
