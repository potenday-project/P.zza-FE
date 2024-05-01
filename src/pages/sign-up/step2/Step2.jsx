// SkillSelectionPage.jsx
import React, { useState } from 'react';

import { SkillChip } from '../../../components/skill-chip/SkillChip';
import { Step } from '../../../components/step/Step';

function SkillSelectionPage({ value, name, skills, onChange }) {
  const [skills_value, setSkillsValue] = useState(skills);
  const handleSkillsChange = (name, value) => {
    setSkillsValue(value);
    onChange(name, skills_value);
  };

  return (
    <div>
      <Step value={value}> 보유하신 스킬을 선택해주세요</Step>
      <div className="infobox">
        <SkillChip
          setSkills={setSkillsValue}
          onChange={handleSkillsChange}
        ></SkillChip>
      </div>
    </div>
  );
}

export default SkillSelectionPage;
