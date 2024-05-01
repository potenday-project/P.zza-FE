import './Header.scss';

import React, {
  useEffect,
  useState,
} from 'react';

import { useNavigate } from 'react-router-dom';

import Backbtn from '../../assets/icons/ic_back_arrow.svg';
import DotMenu from '../../assets/icons/ic_dot_menu.svg';

const Header = ({ title, ...rest }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const goBackHandler = () => {
    if (rest.valueStep === undefined) {
      window.history.back();
    } else {
      rest.onChange(rest.valueStep - 1);
      console.log(rest.valueStep);
    }
  };

  useEffect(() => {
    if (rest.valueStep === 0) navigate('../mainpage');
  });

  const dropMenuHandler = () => {
    setOpen(!open);
  };
  return (
    <header>
      <button onClick={rest.onClick ? rest.onClick : goBackHandler}>
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
