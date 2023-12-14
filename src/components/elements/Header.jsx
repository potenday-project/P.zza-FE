import React from 'react';
import { Button } from '../button/Button';
import Backbtn from '../../assets/icons/ic_back_arrow.svg';
import DotMenu from '../../assets/icons/ic_dot_menu.svg';
import './Header.scss';
import { useLocation } from 'react-router-dom';

const Header = ({ title }) => {
  const goBackHandler = () => {
    window.history.back();
  };
  return (
    <header>
      <button onClick={goBackHandler}>
        <img src={Backbtn} alt="뒤로가기" />
      </button>
      <h1>{title}</h1>
      <button>
        <img src={DotMenu} alt="메뉴" />
      </button>
    </header>
  );
};

export default Header;
