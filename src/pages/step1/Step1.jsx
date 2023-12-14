// BasicInfoPage.jsx
import React, { useState } from 'react';
import { Step } from '../../components/step/Step';
import { Input } from '../../components/input/Input';
import { DropBox } from '../../components/dropbox/DropBox';
import Modal from '../../components/modal/Modal';

const INITIAL = {
  role: '선택',
  portfolio_url: 'url을 입력하세요',
};

const handleChange = (name, value) => {
  setValues((prev) => ({ ...prev, [name]: value }));
};

function BasicInfoPage({ value }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState(INITIAL);
  return (
    <div>
      <Step value={value}> 기본 정보를 입력해주세요</Step>
      <div className="infobox">
        {modalOpen && (
          <Modal step="1" value={values.role} modalstate={modalOpen}></Modal>
        )}
        <Input value={values.name} onChange={handleChange}>
          이름
        </Input>
        <DropBox
          value={values.role}
          onChange={handleChange}
          onClick={() => setModalOpen(true)}
        >
          직무
        </DropBox>
        <Input value={values.portfolio_url} onChange={handleChange}>
          포트폴리오
        </Input>
      </div>
    </div>
  );
}

export default BasicInfoPage;
