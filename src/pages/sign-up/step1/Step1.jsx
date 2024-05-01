// BasicInfoPage.jsx
import React, { useState } from 'react';

import { DropBox } from '../../../components/dropbox/DropBox';
import { Input } from '../../../components/input/Input';
import Modal from '../../../components/modal/Modal';
import { Step } from '../../../components/step/Step';

function BasicInfoPage({
  value,
  role_name,
  portfolio_name,
  role,
  portfolio,
  onRoleChange,
  onPortfolioChange,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [value_role, setValueRole] = useState(role);
  const [value_portfolio, setValuePortfolio] = useState(portfolio);

  const handleChange = (name, value) => {
    if (name == role_name) {
      setValueRole(value);
      onRoleChange(name, value);
    }
    if (name == portfolio_name) {
      setValuePortfolio(value);
      onPortfolioChange(name, value);
    }
  };

  return (
    <>
      <Step value={value}> 기본 정보를 입력해주세요</Step>
      <div className="infobox">
        {modalOpen && (
          <Modal
            step="1"
            value={value}
            modalstate={modalOpen}
            onJdChange={handleChange}
          ></Modal>
        )}

        <DropBox
          name="role"
          value={value_role}
          placeholder={'선택'}
          onChange={handleChange}
          onClick={() => setModalOpen(!modalOpen)}
        >
          직무
        </DropBox>
        <Input
          name="portfolio_url"
          value={portfolio}
          placeholder="url을 입력하세요"
          onChange={handleChange}
        >
          포트폴리오
        </Input>
      </div>
    </>
  );
}

export default BasicInfoPage;
