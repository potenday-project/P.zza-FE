// SkillSelectionPage.jsx
import React from 'react';
import { Step } from '../../components/step/Step';
import { SkillChip } from '../../components/skill-chip/SkillChip';

const SkillSelectionPage = ({ value }) => (
  <div>
    <Step value={value}> 보유하신 스킬을 선택해주세요</Step>
    <div className="infobox">
      <SkillChip></SkillChip>
    </div>
  </div>
);

export default SkillSelectionPage;
