// BasicInfoPage.jsx
import React, { useState } from 'react';
import { Step } from '../../components/step/Step';
import { Input } from '../../components/input/Input';
import { DropBox } from '../../components/dropbox/DropBox';
import Modal from '../../components/modal/Modal';

const BasicInfoPage = ({ modalstate, setModalState, value }) => (
  <div>
    <Step value={value}> 기본 정보를 입력해주세요</Step>
    <div className="infobox">
      {modalstate && <Modal className="modal" modalstate={modalstate}></Modal>}
      <Input value="홍길동">이름</Input>
      <DropBox onClick={() => setModalState(!modalstate)}>직무</DropBox>
      <Input value="URL을 입력하세요">포트폴리오</Input>
    </div>
  </div>
);

export default BasicInfoPage;
