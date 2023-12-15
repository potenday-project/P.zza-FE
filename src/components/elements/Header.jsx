import React, { useState } from 'react';
import { Button } from '../button/Button';
import Backbtn from '../../assets/icons/ic_back_arrow.svg';
import DotMenu from '../../assets/icons/ic_dot_menu.svg';
import './Header.scss';

const Header = ({ title, ...rest }) => {
  const [open, setOpen] = useState(false);
  const goBackHandler = () => {
    window.history.back();
  };

  const dropMenuHandler = () => {
    setOpen(!open);
  };
  return (
    <header>
      <button onClick={goBackHandler}>
        <img src={Backbtn} alt="뒤로가기" />
      </button>
      <h1>{title}</h1>
      {rest.useType === 'project' ? (
        <>
          <button>
            <img src={DotMenu} alt="메뉴" onClick={dropMenuHandler} />
          </button>
          <div className={`drop_menu ${open ? 'open' : ''}`}>
            <button>소통채널 주소보기</button>
            <button>팀원 모집 마감하기</button>
            <button>프로젝트 중단하기</button>
          </div>
        </>
      ) : (
        <div style={{ width: '48px' }} />
      )}
    </header>
  );
};

export default Header;
