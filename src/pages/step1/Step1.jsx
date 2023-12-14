// BasicInfoPage.jsx
import React, { useState } from 'react';
import { Step } from '../../components/step/Step';
import { Input } from '../../components/input/Input';
import { DropBox } from '../../components/dropbox/DropBox';
import Modal from '../../components/modal/Modal';

const INITIAL = {
  role: '선택',
  portfolio_url: '',
};

function BasicInfoPage({ value }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState(INITIAL);
  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    // console.log(values);
  };
  return (
    <div>
      <Step value={value}> 기본 정보를 입력해주세요</Step>
      <div className="infobox">
        {modalOpen && (
          <Modal
            step="1"
            value={values.role}
            modalstate={modalOpen}
            onJdChange={handleChange}
          ></Modal>
        )}

        <DropBox
          name="role"
          value={values.role}
          onChange={handleChange}
          onClick={() => setModalOpen(!modalOpen)}
        >
          직무
        </DropBox>
        <Input
          name="portfolio_url"
          value={values.portfolio_url}
          placeholder="url을 입력하세요"
          onChange={handleChange}
        >
          포트폴리오
        </Input>
      </div>
    </div>
  );
}

export default BasicInfoPage;
