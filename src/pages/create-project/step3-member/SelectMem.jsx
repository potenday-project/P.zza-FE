import { Step } from '../../../components/step/Step';
import { Option } from '../../../components/option/Option';
import './SelectMem.scss';
import { useState } from 'react';
import dev from '../../../../src/images/position/dev_charac.svg';
import active_dev from '../../../../src/images/position/active_dev_charac.svg';
import pm from '../../../../src/images/position/pm_charac.svg';
import active_pm from '../../../../src/images/position/active_pm_charac.svg';
import design from '../../../../src/images/position/design_charac.svg';
import active_design from '../../../../src/images/position/active_design_charac.svg';

export function SelectMem({ step, name, value, onChange }) {
  const [teams, setTeams] = useState(value);
  const [active, setActive] = useState([false, false, false, false]);

  const handleTeamChange = (val) => {
    const newTeams = [...teams];
    newTeams.push({
      role: val,
      recruitment_target: 1,
    });
    setTeams(newTeams);
    onChange(name, newTeams);
    const newActive = [...active];
    newActive;
  };
  console.log(teams);
  return (
    <div>
      <Step value={step}>어떤 팀원과 함께하고 싶나요?</Step>
      <div className="mem-frame">
        <div className="row">
          <Option
            onSelect={handleTeamChange}
            src={active[0] ? active_dev : dev}
            active={active[0]}
            name={name}
          >
            BE개발
          </Option>
          <Option
            onSelect={handleTeamChange}
            src={active[1] ? active_dev : dev}
            active={active[1]}
            name={name}
          >
            FE개발
          </Option>
        </div>
        <div className="row">
          <Option
            onSelect={handleTeamChange}
            src={active[2] ? active_pm : pm}
            active={active[2]}
            name={name}
          >
            기획
          </Option>
          <Option
            onSelect={handleTeamChange}
            src={active[3] ? active_design : design}
            active={active[3]}
            name={name}
          >
            디자인
          </Option>
        </div>
      </div>
    </div>
  );
}
