// ExperienceInputPage.jsx
import React from 'react';
import { Step } from '../../components/step/Step';
import { DropBox } from '../../components/dropbox/DropBox';

const ExperienceInputPage = ({ value }) => (
  <div>
    <Step value={value}>경력을 입력해주세요</Step>
    <div className="infobox">
      <DropBox></DropBox>
    </div>
  </div>
);

export default ExperienceInputPage;
