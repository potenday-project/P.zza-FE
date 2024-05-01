// ExperienceInputPage.jsx
import React, { useState } from 'react';

import { DropBox } from '../../../components/dropbox/DropBox';
import Modal from '../../../components/modal/Modal';
import { Step } from '../../../components/step/Step';

function ExperienceInputPage({ value, name, experience, onChange }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [value_exp, setValueExp] = useState(experience);
  const handleChange = (name, val) => {
    setValueExp(val);
    if (val === '경력없음') {
      onChange(name, 0);
    } else if (val === '3년 미만') {
      onChange(name, 3);
    } else if (val === '5년 미만') {
      onChange(name, 5);
    } else if (val === '5년 미만') {
      onChange(name, 5);
    } else {
      onChange(name, 8);
    }
  };

  return (
    <div>
      <Step value={value}>경력을 입력해주세요</Step>
      <div className="infobox">
        <DropBox
          name="experience"
          value={value_exp}
          placeholder="선택"
          onChange={handleChange}
          onClick={() => setModalOpen(!modalOpen)}
        ></DropBox>
        {modalOpen && (
          <Modal
            step="3"
            value_exp={value_exp}
            onexpChange={handleChange}
            modalstate={modalOpen}
          ></Modal>
        )}
      </div>
    </div>
  );
}

export default ExperienceInputPage;
