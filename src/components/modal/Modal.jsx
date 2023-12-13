import dev from '../../assets/icons/dev.svg';
import pm from '../../assets/icons/pm.svg';
import desinger from '../../assets/icons/designer.svg';
import './Modal.scss';
import { useState } from 'react';

function Modal({ modalstate, className }) {
  const [modal, setModal] = useState(modalstate);
  return (
    <div
      className={`black-bg ${modal ? 'show-modal' : ''}`}
      onClick={() => setModal(false)}
    >
      <div className={`white-bg ${className}`}>
        <div className="section">
          <div className="modal-title">해당하는 직무를 선택해주세요</div>
          <div className="options">
            <div className="jd">
              <img src={dev} />
              <p>개발자</p>
            </div>
            <div className="jd">
              <img src={pm} />
              <p>기획자</p>
            </div>
            <div className="jd">
              <img src={desinger} />
              <p>디자이너</p>
            </div>
          </div>
          <button className="modal-button" onClick={() => setModal(false)}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
