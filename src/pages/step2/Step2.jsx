// SkillSelectionPage.jsx
import React, { useState } from 'react';
import { Step } from '../../components/step/Step';
import { SkillChip } from '../../components/skill-chip/SkillChip';

function SkillSelectionPage({ value }) {
  const [skills, setSkills] = useState();
  return (
    <div>
      <Step value={value}> 보유하신 스킬을 선택해주세요</Step>
      <div className="infobox">
        <SkillChip setSkills={setSkills}></SkillChip>
      </div>
    </div>
  );
}

export default SkillSelectionPage;
