import './Modal.scss';

import { useState } from 'react';

import click from '../../assets/icons/click.svg';
import desinger from '../../assets/icons/designer.svg';
import dev from '../../assets/icons/dev.svg';
import pm from '../../assets/icons/pm.svg';
import unclick from '../../assets/icons/unclick.svg';

function Modal({
  modalstate,
  value,
  value_exp,
  step,
  onJdChange,
  onexpChange,
}) {
  const [modal, setModal] = useState(modalstate);
  const [jdvalue, setJDValue] = useState(value);
  const [expvalue, setExpValue] = useState(value_exp);

  const EXP = ['경력없음', '3년 미만', '5년 미만', '7년 미만', '7년 이상'];
  const [optionClick, setOptionClick] = useState(Array(EXP.length).fill(false));

  const renderModal = () => {
    switch (step) {
      case '1':
        return (
          <>
            <div className="modal-title">해당하는 직무를 선택해주세요</div>
            <div className="options">
              <div
                className={`jd ${jdvalue === '개발자' ? 'clicked' : ''}`}
                onClick={() => {
                  setJDValue('개발자');
                  onJdChange('role', '개발자');
                }}
              >
                <img src={dev} />
                <p>개발자</p>
              </div>
              <div
                className={`jd ${jdvalue === '기획자' ? 'clicked' : ''}`}
                onClick={() => {
                  setJDValue('기획자');
                  onJdChange('role', '기획자');
                }}
              >
                <img src={pm} />
                <p>기획자</p>
              </div>
              <div
                className={`jd ${jdvalue === '디자이너' ? 'clicked' : ''}`}
                onClick={() => {
                  setJDValue('디자이너');
                  onJdChange('role', '디자이너');
                }}
              >
                <img src={desinger} />
                <p>디자이너</p>
              </div>
            </div>
            <button
              className={`modal-button ${jdvalue ? 'clicked' : ''}`}
              onClick={() => setModal(false)}
            >
              확인
            </button>
          </>
        );
      case '3':
        return (
          <>
            <div className="exp-container">
              {EXP.map((item, i) => (
                <div
                  key={i}
                  className="exp"
                  onClick={() => {
                    const newClick = [...optionClick];
                    newClick[i] = !newClick[i];
                    setOptionClick(newClick);
                    setExpValue(item);
                    onexpChange('experience', item);
                  }}
                >
                  <div className="items">{item}</div>
                  <img src={optionClick[i] ? click : unclick} />
                </div>
              ))}
            </div>
            <button
              className={`modal-button ${expvalue ? 'clicked' : ''}`}
              onClick={() => setModal(false)}
            >
              확인
            </button>
          </>
        );
    }
  };

  return (
    <div className={`black-bg ${modal ? 'show-modal' : ''}`}>
      <div className="white-bg">
        <div className="section">{renderModal()}</div>
      </div>
    </div>
  );
}

export default Modal;
