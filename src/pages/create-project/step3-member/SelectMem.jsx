import { Step } from '../../../components/step/Step';
import { Option } from '../../../components/option/Option';
import './SelectMem.scss';
import { useState } from 'react';

export function SelectMem({ step, name, value, onChange }) {
  const [teams, setTeams] = useState(value);
  const handleTeamChange = (val) => {
    const newTeams = [...teams];
    newTeams.push({
      role: val,
      recruitment_target: 1,
    });
    setTeams(newTeams);
    onChange(name, newTeams);
    //
  };
  console.log(teams);
  return (
    <div>
      <Step value={step}>어떤 팀원과 함께하고 싶나요?</Step>
      <div className="frame">
        <div className="row">
          <Option onSelect={handleTeamChange} name={name}>
            BE개발
          </Option>
          <Option onSelect={handleTeamChange} name={name}>
            FE개발
          </Option>
        </div>
        <div className="row">
          <Option onSelect={handleTeamChange} name={name}>
            기획
          </Option>
          <Option onSelect={handleTeamChange} name={name}>
            디자인
          </Option>
        </div>
      </div>
    </div>
  );
}
