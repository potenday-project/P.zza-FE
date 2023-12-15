import { TopNav } from '../../components/TopNav/TopNav';
import { useState } from 'react';
import { Button } from '../../components/button/Button';
import { SelectGuide } from './SelectGuide';
import { CreateTitle } from './CreateTitle';
import { SelectMem } from './SelectMem';
import { ExplainProject } from './ExplainProject';
import { CreateDone } from './CreateDone';
import { useNavigate } from 'react-router-dom';

const INITAIL = {
  project_name: '',
  period: '',
  project_desc: '',
  chat_url: '',
  team_members: [
    {
      role: '',
      recruitment_target: 0,
    },
  ],
};

export function CreateProject() {
  const [valueStep, setValueStep] = useState(1);
  const [isClick, setIsClick] = useState(false);
  const [values, setValues] = useState(INITAIL);

  const navigate = useNavigate();

  const handleChange = (name, val) => {
    const newValues = values;
    newValues[name] = val;
    setValues(newValues);
    console.log(values);
  };

  const renderContent = () => {
    switch (valueStep) {
      case 1:
        return (
          <CreateTitle
            name="project_name"
            step={valueStep}
            value={values.project_name}
            onChange={handleChange}
          />
        );
      case 2:
        return (
          <SelectGuide
            name="period"
            step={valueStep}
            value={values.period}
            onChange={handleChange}
          />
        );
      case 3:
        return (
          <SelectMem
            name="team_members"
            step={valueStep}
            value={values.team_members}
            onChange={handleChange}
          />
        );
      case 4:
        return (
          <ExplainProject
            desc_name="project_desc"
            url_name="chat_url"
            step={valueStep}
            desc={values.project_desc}
            chat_url={values.chat_url}
            onChange={handleChange}
          />
        );
      case 5:
        return <CreateDone />;
      default:
        return null;
    }
  };

  if (valueStep === 5) navigate('../mainpage');
  return (
    <>
      <TopNav setValueStep={setValueStep} step={valueStep}>
        프로젝트 생성
      </TopNav>
      <div className="topic-container">{renderContent()}</div>
      <Button
        className={`button ${isClick ? 'clicked' : ''}`}
        onClick={() => {
          setValueStep(valueStep + 1);
          setIsClick(true);
        }}
      >
        {valueStep === 5 ? '홈으로' : '다음'}
      </Button>
    </>
  );
}
