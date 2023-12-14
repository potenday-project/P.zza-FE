// ExperienceInputPage.jsx
import React, { useState } from 'react';
import { Step } from '../../components/step/Step';
import { DropBox } from '../../components/dropbox/DropBox';
import Modal from '../../components/modal/Modal';

function ExperienceInputPage({ value }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [value_exp, setValueExp] = useState({ experience: '' });
  const handleChange = (name, value) => {
    setValueExp((prev) => ({ ...prev, [name]: value }));
    // console.log(values);
  };

  console.log(value_exp);
  return (
    <div>
      <Step value={value}>경력을 입력해주세요</Step>
      <div className="infobox">
        <DropBox onClick={() => setModalOpen(!modalOpen)}></DropBox>
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
